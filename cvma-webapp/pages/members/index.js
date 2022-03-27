import { getSession } from "next-auth/client";
import EventUpdate from "../../components/events/update/event-update";
import MemberUpdate from "../../components/members/memberUpdate";
import MemberNew from "../../components/members/memberNew";
import classes from "../../styles/member.module.css";

function Members(props) {
  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
     <div className={classes.adminouterbox}>
     <div className={classes.memberUpdate}>
          <MemberUpdate  user={props.member} />
      </div>
     </div>
      <div>Doucuments</div>
      <div className={classes.adminouterbox}>
       
        <div>
        <EventUpdate />
        </div>
        <div className={classes.memberNew}>
          <MemberNew />
          </div>
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
