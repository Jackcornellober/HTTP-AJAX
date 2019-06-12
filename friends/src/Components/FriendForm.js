import React from 'react';

class FriendForm extends React.Component {
    


    render() {
    return(
        <form onSubmit = {this.props.addFriend}>
            <input placeHolder = 'name'></input>
        </form>
    
    )}
}

export default FriendForm; 