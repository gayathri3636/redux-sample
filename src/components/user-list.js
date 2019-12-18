import React from 'react';

const myList = ['firstName', 'lastName', 'Gender'];

const UserList = () => (
    <ul>
        {myList.map(item => {
            return <li key = {item}>{item}</li>
        })}
    </ul>
)