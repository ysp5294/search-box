
import { useState } from "react";
import Searchbox from "./Searchbox";
import './UserItem.css';

const UserItem = users => {

    return <div className='user-item'>
        <div className='user-item__id'>{Object.values(users)[0][0]}</div>
        <div className='user-item__name'>{Object.values(users)[0][1]}</div>
        <div className='user-item__address'>{Object.values(users)[0][3]}</div>
        <br />
    </div>
}

export default UserItem;