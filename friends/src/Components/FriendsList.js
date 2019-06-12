import React from 'react';
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = (props) => {
    return(<div>
        {props.data.map(friend => <Friend data={friend}/>)}
        <FriendForm addFriend = {props.addFriend}/>
    </div>
    )}

export default FriendsList;