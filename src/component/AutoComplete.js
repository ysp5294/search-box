
import React, { useState } from "react";
// import './styles.css'

import Searchbox from './Searchbox';
import UserItem from './UserItem';
import './AutoComplete.css';

const AutoComplete = props => {
    console.log(props.users);
    const [userSearchByName, setUserSearchByName] = useState("");
    // const [userSearchById, setUserSearchById] = useState("");


    const filterChangeHandler = selectedUser => {
        setUserSearchByName(selectedUser);
        // setUserSearchById(event.target.value);
        // console.log(userSearchByName);
    }

    const filteredUsers = props.users.filter(user => {
        return user.name.toLowerCase().includes(userSearchByName);
    });


    let userContent = <p>No user Found!</p>;

    if (filteredUsers.length > 0) {
        userContent = filteredUsers.map(user => (
            <UserItem
                id={user.id}
                name={user.name}
                address={user.address}
            />
        ));
    }

    return <div >
        <Searchbox onChangeValue={filterChangeHandler} />
       
        {!userSearchByName && <div className='scroll'>
            
        </div>} 

        {userSearchByName && <div className='scroll'>
            {userContent}
            </div>}
    </div>
}


export default AutoComplete;



