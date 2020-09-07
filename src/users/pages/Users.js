import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[{id: 'u1', 
    name: 'Georgina S', 
    image: 'https://media.istockphoto.com/photos/portrait-of-a-confident-young-architect-in-a-modern-office-picture-id1251518064',places: 3}
];

    return <UsersList items={USERS} />;
};

export default Users;