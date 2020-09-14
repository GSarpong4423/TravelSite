import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
    id:'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.great-towers.com%2Ftower%2Fempire-state-building&psig=AOvVaw3msACNA_W9oPZz2JZAzDyE&ust=1600372440637000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDHn4-67usCFQAAAAAdAAAAABAD',
    address: '20 W 34th St, New York, NY 10001',
    loction:{
        lat: 40.7484405,
        lng: -73.9856644
        }
        creator: 'u1'
   },
   {
    id:'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.great-towers.com%2Ftower%2Fempire-state-building&psig=AOvVaw3msACNA_W9oPZz2JZAzDyE&ust=1600372440637000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDHn4-67usCFQAAAAAdAAAAABAD',
    address: '20 W 34th St, New York, NY 10001',
    loction:{
        lat: 40.7484405,
        lng: -73.9856644
        }

   }

];

const UserPlaces = () => {
    return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;