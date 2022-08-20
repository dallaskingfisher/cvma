import classes from "../members/memberRolls.module.css";
function MemberRole(props) {
  const members1 = JSON.parse(props.members);
  
  return (
    <section className={classes.background}>
      <div className={classes.tablewrapper}>
        <div className={classes.tablescroll}>
            <h3>Members</h3>
          <table>
            <thead>
              
              <tr>
                <th>Member Number</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {members1.map((member) => (
                <tr key={member["_id"]}>
                  <td>
                    <a className={classes.tablelink} onClick={() => { props.modalOpen();props.setMemberId(member["memberId"]);}}>
                      {member["memberId"]}
                    </a>
                  </td>
                  <td>{`${member["firstName"]} ${member["roadName"] ?`"${member["roadName"]}"` : ''} ${member["lastName"]}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default MemberRole;
