import React from 'react';

class FriendForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name:'',
            age:0,
            email:'',
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.newFriend);
        this.setState({
            newFriend: {
                
            }
        })
    }

    render() {
    return(
        <form onSubmit = {this.props.addFriend}>
            <input value = {this.state.name} onChange = {this.handleChanges} placeHolder = 'name' name = 'name'></input>
            <input type = 'number' value = {this.state.age} onChange = {this.handleChanges} placeHolder = 'age' name = 'age'></input>
            <input value = {this.state.email} onChange = {this.handleChanges} placeHolder = 'email' name = 'email'></input><br></br>
            <button>Add Friend</button>
        </form>
    
    )}
}

export default FriendForm; 