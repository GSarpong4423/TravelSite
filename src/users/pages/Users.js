import React from 'react';

import UsersList from '../components/UsersList';

//stateful components
const Users = () => {
    const USERS =[{id: 'u1', 
    name: 'Georgina S', 
    image: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/89267923_3789573437749673_9114242552860508160_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=oEgNWufR9HgAX9guYUc&_nc_ht=scontent-lga3-2.xx&oh=b8678b0f03a5ad64915df16cade1d152&oe=5F88532B',places: 3}
];

    return <UsersList items={USERS} />;
};

export default Users;