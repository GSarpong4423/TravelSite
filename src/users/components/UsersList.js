import React from 'react';

import UserItem from './UserItem';
import './UsersList.css'

const UseraList = props => {
    if (props.items.lenght ===0){
        return (
            <div className="center">
              <h2> No users found.</h2>
        </div>
        );
    }
}
    return (
        <ul>
            {props.items.map(user=>(<UserItems 
            key ={user.id} 
            image={user.image} 
            name={user.name}
            placeCount ={user.places} 
            />
            ))}
        </ul>
    );
        
                    
        
export default UseraList;
