import { getSession } from "next-auth/client";
import UploadFiles from "../../components/upload/upload";
import MemberUpdate from "../../components/members/memberUpdate";
import MemberNew from "../../components/members/memberNew";
import Documents from "../../components/documents/documents";
import MemberRole from "../../components/members/memberRolls";
import Modal from "../../components/modal/modal";
import classes from "../../styles/member.module.css";
import { connectDatabase } from "../../helpers/db-util";
import { useState, useEffect } from 'react';

function Members(props) {
  const membersObj = JSON.parse(props.members);
  const member = membersObj.find(
    (element) => element.memberId === props.session.user.name
  );
  const roleSetting = member.role
  const [adminRole, setAdminRole] = useState(false)
  const [memberId, setMemberId] = useState();
  const [ modal, setModal] = useState(true);
  const [ effect, setEffect ] =useState(false)
   useEffect(() => {
    setModal(!modal)
   
   },[effect])
  useEffect(() => {
    if(roleSetting === 'admin'){
      setAdminRole(!adminRole);
     }
  },[])
  const modalOpen = () =>{
    setEffect(!effect)
  }
  const modalClose = () =>{
    setEffect(!effect)
  }
  console.log(adminRole)
  const uploadFiles = (adminRole) => {
    if(adminRole){
      return <UploadFiles />
    
    }
  }
  const fileUpload = uploadFiles(adminRole)
  
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
      {fileUpload}
        <Documents />
        {adminRole ? (<MemberNew />): ''}
      
        <MemberRole members={props.members} setMemberId={setMemberId} modalOpen={modalOpen}/>
      </div>
      <Modal  memberId={memberId} show={modal} setEffect={setEffect} modalClose={modalClose} members={props.members} member={member} adminRole={adminRole}/>
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const client = await connectDatabase();
  const collection = client.db().collection("members");
  const data = await collection.find({}).sort({ _id: 1}).toArray();
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
