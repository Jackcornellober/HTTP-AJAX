import React from 'react';
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = (props) => {
    return(<div className = 'friends'>
        {props.data.map(friend => <Friend deleteFriend = {props.deleteFriend} setUpdateForm={props.setUpdateForm} key = {friend.name} data={friend}/>)}
        </div>
    )}

export default FriendsList;