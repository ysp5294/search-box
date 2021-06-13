
import { useState } from "react";
import Searchbox from "./Searchbox";
import './UserItem.css';

const UserItem = user => {
    // const [user, setUser] = useState('');

    console.log(user);

    return <div className='user-item'>
        <div className='user-item__id'>{user.id}</div>
        <div className='user-item__name'>{user.name}</div>
        <div className='user-item__address'>{user.address}</div>
        <br />
    </div>
}

export default UserItem;