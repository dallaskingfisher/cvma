import { useState, useEffect, useRef } from 'react';
import MemberTable from './membertable';
// this will be the root component for the member list
// will add search feature to select members 

function MemberList (props) {
const memberListFromDatabase = props.members

const [memberlist, setMemberList] = useState();

useEffect(() => {
    setMemberList(memberListFromDatabase)
}, [onClickClear])

function submitHandler () {
const memberNumberRef = useRef();
const firstNameRef = useRef();
const lastNameRef = useRef();
const memberNumber = memberNumberRef.current.value;
const firstName = firstNameRef.current.value;
const lastName = lastNameRef.current.value;

if(memberNumber && !firstName && !lastName){
    const selectedMembers = memberListFromDatabase.filter(member => member.memberId === memberNumber);
    setMemberList(selectedMembers);
    } else if (!memberNumber && firstName || lastName) {
    //add code to search membersList
    if(firstName && lastName) {
        const selectedByFirstName = memberListFromDatabase.filter(name => name.firstName === firstName);
        const selectedMembers = selectedByFirstName.filter(name => name.lastName === lastName);
        setMemberList(selectedMembers);
    } else if (firstName && !lastName) {
        const selectedMembers = memberListFromDatabase.filter(name => name.firstName === firstName);
        setMemberList(selectedMembers);
    } else {
        const selectedMembers = memberListFromDatabase.filter(name => name.lastName === lastName);
        setMemberList(selectedMembers);
    }
    } 
}
function onClickClear(){
    memberNumberRef = '';
    firstNameRef = ''; 
    lastNameRef = '';
}

return (
 <form onSubmit={submitHandler}>
    <input type="text" name="memberNumber" id="memberNumber" placeholder="Member Number" ref={memberNumberRef}/>
    <input type="text" name="firstName" id="firstName" placeholder="First Name" ref={firstNameRef}/>
    <input type="text" name="lastName" id="lastName" placeholder="First Name" ref={lastNameRef}/>
    <input type="submit" name="submit" value="Search" />
    <button onClick={onClickClear}>Clear</button>
   
  
   
 </form> );
 <MemberTable members={memberlist} />
}

export default MemberList;