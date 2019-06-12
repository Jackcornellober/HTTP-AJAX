import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from "./Components/FriendsList";
import axios from 'axios';

class App extends React.Component {
  
  state = {
    friendsData: [],
  }

  componentDidMount() {
    axios.get( 'http://localhost:5000/friends' )
         .then( res => this.setState( {friendsData: res.data} ) )
         .catch( err => console.log( err ) );
  }

  render(){
  return (
    <div className="App">
      <FriendsList addFriend = {this.addFriend} data = {this.state.friendsData} />
    </div>
  );
  }
}

export default App;
