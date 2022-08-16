import { getSession } from "next-auth/client";
import UploadFiles from "../../components/upload/upload";
import MemberUpdate from "../../components/members/memberUpdate";
import MemberNew from "../../components/members/memberNew";
import Documents from "../../components/documents/documents";
import MemberRole from "../../components/members/memberRolls";
import classes from "../../styles/member.module.css";
import { connectDatabase } from "../../helpers/db-util";
import { useState } from 'react';

function Members(props) {
  const membersObj = JSON.parse(props.members);
  const member = membersObj.find(
    (element) => element.memberId === props.session.user.name
  );
  const [memberId, setMemberId] = useState();
  const [ modal, setModal] = useState(false);
  
  function openModal (memberId){
    setMemberId(memberId);
    setModal(!modal)
  }
  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div className={classes.adminouterbox}>
        <div className={classes.memberUpdate}>
          <MemberUpdate user={member} />
        </div>
      </div>

      <div className={classes.adminouterbox}>
        <UploadFiles />
        <Documents />
        <MemberNew />
        <MemberRole members={membersObj} openModel={openModal} />
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const client = await connectDatabase();
  const collection = client.db().collection("members");
  const data = await collection.find({}).toArray();
  const members = JSON.stringify(data);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { session, members: members } };
}

export default Members;
