import classes from '../members/memberRolls.module.css';
function MemberRole (props) {
    const members = JSON.parse(props.members);

    const modalHandler = (memberNumber) => {

    }
    return (
        <section className={classes.background}>
            <div className={classes.tablewrapper}>
                <div className={classes.tablescroll}>
                    <table>
                        <thead>
                           <tr>Members</tr>
                           <tr><th>Member Number</th><th>Name</th></tr>     
                        </thead>
                        <tbody>
                            {members.map(member => <tr key={member[0]}><td><a onClick={() => modalHandler(member[1])}>{member[1]}</a></td><td>{`${member[2]} "${member[4]}" ${member[3]}`}</td></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default MemberRole;