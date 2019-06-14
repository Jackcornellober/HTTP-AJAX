import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from "./Components/FriendsList";
import axios from 'axios';
import FriendForm from './Components/FriendForm'

class App extends React.Component {
  
  state = {
    friendsData: [],
  }

  componentDidMount() {
    axios.get( 'http://localhost:5000/friends' )
         .then( res => this.setState( {friendsData: res.data} ) )
         .catch( err => console.log( err ) );
  }

  addFriend = (newFriend) => {
    console.log(newFriend);
    axios.post('http://localhost:5000/friends', {
      name: newFriend.name,
      age: newFriend.age,
      email: newFriend.email,
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
  return (
    <div className="App">
      <FriendsList addFriend = {this.addFriend} data = {this.state.friendsData} />
      <FriendForm addFriend = {this.addFriend}/>
    </div>
  );
  }
}

export default App;
