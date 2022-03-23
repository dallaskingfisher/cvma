import { getSession } from "next-auth/client";
import EventUpdate from "../../components/events/update/event-update";
import MemberUpdate from "../../components/members/memberUpdate";
import {useState, useEffect } from 'react';
function Members(props) {
    const { name, email } = props.session.user
   
   console.log(props.session.user)
   console.log(props.members)
   const members = props.members
   const member = members.data.find(element => element.memberId === props.session.user.name)

   
    
  


  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div>Member Info
          <MemberUpdate  user={member} />
      </div>
      <div>Doucuments</div>
      <div>
        admin pannel
        <EventUpdate />
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const members = await fetch("http://localhost:3000/api/members/memberUpdate").then(response => response.json())
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
 
 

  return { props:{session,members: members } 
};
}

export default Members;
