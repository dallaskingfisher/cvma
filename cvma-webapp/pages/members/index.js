import { getSession } from "next-auth/client";
import EventUpdate from "../../components/events/update/event-update";
import MemberUpdate from "../../components/members/memberUpdate";
import {useState, useEffect } from 'react';
function Members(props) {
    const { name, email } = props.session.user
    const [memberInfo, setMemberInfo ] = useState();
   
    useEffect(() => {
      fetch("/api/members", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => setMemberInfo(data));
    }, []);
  //  console.log(memberInfo)
  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div>Member Info
          <MemberUpdate  user={memberInfo}/>
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
  const memberId = session.user.name;

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
 
 

  return { props:{session}};
}

export default Members;
