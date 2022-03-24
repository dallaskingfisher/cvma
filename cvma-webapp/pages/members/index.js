import { getSession } from "next-auth/client";
import EventUpdate from "../../components/events/update/event-update";
import MemberUpdate from "../../components/members/memberUpdate";

function Members(props) {
  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div>Member Info
          <MemberUpdate  user={props.member} />
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
  const member = members.data.find(element => element.memberId === session.user.name)

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
 
 

  return { props:{session,members: members, member: member } 
};
}

export default Members;
