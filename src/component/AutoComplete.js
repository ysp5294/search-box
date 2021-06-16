
import React, { useEffect, useState } from "react";
// import './styles.css'

import Searchbox from './Searchbox';
import UserItem from './UserItem';
import './AutoComplete.css';

const AutoComplete = props => {
    
    const [userSearch, setUserSearch] = useState("");
    
    const [filteredUsers, setFilteredUsers] = useState([]);


    const filterChangeHandler = selectedUser => {
        setUserSearch(selectedUser);
    }

    const arr = Object.values(props.users);
    let tempUser = [];

    Object.values(arr).map(value => {
        let user = Object.values(value);

        for (let i = 0; i < user.length; i++) {

            if (typeof user[i] === 'string') {

                if (user[i].toLowerCase().includes(userSearch)) {
                    tempUser.push(user);
                    break;
                }
            } else {
                if (user[i] === userSearch) {
                    tempUser.push(user);
                    break;
                }
            }
        }
        
        
    });

 
    useEffect(() => {

        setFilteredUsers(tempUser);
    }, [userSearch]);

    let userContent = <p>No user Found!</p>;

    if (filteredUsers.length > 0) {
        userContent = filteredUsers.map( (user, index) => (
            <UserItem
                users={user}
            />
        ));
    }

    return <div >
        <Searchbox onChangeValue={filterChangeHandler} />

        {!userSearch && <div className='scroll'>

        </div>}

        {userSearch && <div className='scroll'>
            {userContent}
        </div>}
    </div>
}


export default AutoComplete;



