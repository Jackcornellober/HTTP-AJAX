import React from 'react';
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = (props) => {
    return(<div>
        {props.data.map(friend => <Friend key = {friend.name} data={friend}/>)}
        </div>
    )}

export default FriendsList;