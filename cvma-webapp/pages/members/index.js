import { getSession } from "next-auth/client";
import UploadFiles from "../../components/upload/upload";
import MemberUpdate from "../../components/members/memberUpdate";
import MemberNew from "../../components/members/memberNew";
import Documents from "../../components/documents/documents";
import classes from "../../styles/member.module.css";

function Members(props) {
  const member = props.members.data.find(
    (element) => element.memberId === props.session.user.name
  );
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
       
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
 
  const members = await fetch(
    "http://localhost:3000/api/members/memberUpdate"
  ).then((response) => response.json());
  

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: { session, members: members } };
}

export default Members;
