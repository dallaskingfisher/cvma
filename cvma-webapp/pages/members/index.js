import { getSession } from "next-auth/client";
import EventUpdate from "../../components/events/update/event-update";
import MemberUpdate from "../../components/members/memberUpdate";
function Members(props) {
    const { name, email } = props.session.user
   

  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div>Member Info
          <MemberUpdate memberId={name} />
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
