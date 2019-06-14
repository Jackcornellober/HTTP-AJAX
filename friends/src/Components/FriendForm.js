import React from 'react';

class FriendForm extends React.Component {
    
    

    constructor() {
        super();
        this.state = {
            name:'',
            age:null,
            email:'',
        };
    }
    
    
        routeToHome = event => {
          event.preventDefault();
          this.props.history.push('/');
        }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = e => {
        e.preventDefault();
        this.props.addFriend({
            id: 100,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        });
        this.setState({
                name:'',
                age:0,
                email:'',
        })
    }

    render() {
    return(
        
        <form className = 'friendForm' onSubmit = {this.addFriend}>
            <h2>Add Friend</h2>
            <input className = 'input' value = {this.state.name} onChange = {this.handleChanges} placeholder = 'name' name = 'name'></input>
            <input className = 'input' type = 'number' value = {this.state.age} onChange = {this.handleChanges} placeholder = 'age' name = 'age'></input>
            <input className = 'input' value = {this.state.email} onChange = {this.handleChanges} placeholder = 'email' name = 'email'></input><br></br>
            <button className = 'buttoni'>Add Friend</button>
        </form>
    
    )}
}

export default FriendForm; 