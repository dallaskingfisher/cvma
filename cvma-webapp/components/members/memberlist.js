import { useState, useEffect, useRef } from 'react';
// this will be the root component for the member list
// will add search feature to select members 

function MemberList (props) {
const memberList = props.members

const [memberlist, setMemberList] = useState();


async function submitHandler () {
const memberNumberRef = useRef();
const firstNameRef = useRef();
const lastNameRef = useRef();
const memberNumber = memberNumberRef.current.value;
const firstName = firstNameRef.current.value;
const lastName = lastNameRef.current.value;

if(memberNumber && !firstName && !lastName){
    const selectedMembers = memberList.filter(member => member.memberId === memberNumber);
    setMemberList(selectedMembers);
    } else if (!memberNumber && firstName || lastName) {
    //add code to search membersList
    }
}

return (
 <form>
    <input type="text" name="memberNumber" id="memberNumber" placeholder="Member Number">
    <input type="text" name="firstName" id="firstName placeholder="First Name" >
    <input type="text" name="lastName" id="lastName" placeholder="Last Name">
    <input type="button" name="submit" id="submit">
    <button>clear</button>
 </form> );
}

export default MemberList;