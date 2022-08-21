import {useState} from 'react';

function  Test () {
    const [selected, setSelected ] = useState(false)
    const role = 'member'
    const roleOption = (role) =>{
        if (role === 'admin'){
            return <select>
                 <option selected >value 1</option>
                    <option >value 2</option>
            </select>
        } else {
            return <select>
                 <option  >value 1</option>
                    <option selected >value 2</option>
            </select>
        }
    }
    const memberRole = roleOption(role);
    return(
        <div>
             {memberRole}
                
            

        </div>
    )
}
export default Test;