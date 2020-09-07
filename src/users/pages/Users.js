import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[{id: 'u1', 
    name: 'Georgina S', 
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fafrican_american_avatar.html&psig=AOvVaw2OpOuH2qgjlFMX5JSI-W1M&ust=1599532408625000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiJ-tmA1usCFQAAAAAdAAAAABAG',places: 3}
];

    return <UsersList items={USERS} />;
};

export default Users;