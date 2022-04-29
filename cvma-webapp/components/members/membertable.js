function MemberTable(props) {
  const members = props.members;
 //currently building the table that will list the members in the chapter.
  const memberlist = members.map(
    (member) =>
      `<tr><td>${member.memberId}</td><td>${member.firstName}</td><td>${member.roadName}</td><td>${member.lastName}</td><td>`
  );

  return (
    <table>
      <tr>
        <th>Member Number</th>
        <th>First Name</th>
        <th>Road Name</th>
        <th>Last Name</th>
        <th>Delete/Edit</th>
      </tr>
      {}
    </table>
  );
}

export default MemberTable;
