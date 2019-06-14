import React from "react"

class Friend extends React.Component {
    state = {
                thisFriend: {
                    name: this.props.data.name,
                    age: this.props.data.age,
                    email: this.props.data.email,
                    id: this.props.data.id
                }
            }
        
        
        setUpdateForm = e => {
            

            this.props.setUpdateForm(this.state.id,this.state.thisFriend) 
        }

        deleteFriend = e => {
            

            this.props.deleteFriend(e,this.state.thisFriend) 
        }
        

    render(){
    return(
    <div className = 'friend'>
        <p >{this.props.data.name + ` `}</p><br></br>
        age: {this.props.data.age}<br></br>
        email: {this.props.data.email}
        <button onClick = {this.setUpdateForm}>Make Active Friend</button><br></br>
        <button onClick = {this.deleteFriend}>Delete Friend</button>
    </div>
    )}
    }

export default Friend;