//@ts-nocheck
"use client"
import { adduser } from '@/redux/slice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
    const [name, setname] = useState("");
    const dispatch = useDispatch();
    const userdata = useSelector((data) => data.users);
    console.log(userdata);
    const userdispatch = () => {
        dispatch(adduser(name));
    }
    return (
        <div>
            <div>
                <h3>Add user</h3>
                <input type="text" name="" id="" placeholder='add new user' onChange={(e) => setname(e.target.value)} />
                <button onClick={userdispatch}>Add User</button>
            </div>
            <div>
                <h3>user list</h3>
                {
                    userdata.map((item) => {
                        <div>
                            {item.name}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default User