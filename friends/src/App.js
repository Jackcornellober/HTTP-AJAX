import React from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from "./Components/FriendsList";
import axios from 'axios';
import FriendForm from './Components/FriendForm'
import UpdateForm from './Components/UpdateForm'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      friendsData: [],
      activeFriend: null
    };
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
    .then((res) => {
      this.setState({friendsData: res.data});
      // this.props.history.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  setUpdateForm = (e, friend) => {
    this.setState({ activeFriend: friend });
    // this.props.history.push('/update-form');
  };

  updateFriend = friend => {
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  deleteFriend = (e, friend) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render(){
  return (
    <div className="App">
      <Router>
        <nav>
        <NavLink className = 'navItem' exact to="/add-form">
          Add Friend
        </NavLink>
        <NavLink className = 'navItem' exact to="/update-form">
          Update Active Friend
        </NavLink>
        <NavLink className = 'navItem' exact to="/">
          Friends List
        </NavLink>
        </nav>
        <Route exact path="/" render={props => (<FriendsList {...props} setUpdateForm={this.setUpdateForm} deleteFriend = {this.deleteFriend} data = {this.state.friendsData} />)} />
        <Route path = '/add-form' render = {props => (<FriendForm {...props} addFriend = {this.addFriend}/>)} />
        <Route path= "/update-form" render={props => (<UpdateForm {...props} updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} />)} />
      </Router>
    </div>
  );
  }
}

export default App;
