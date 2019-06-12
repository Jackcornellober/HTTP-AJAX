import React from "react"

const Friend = (props) => {
    return(
    <div className = 'friend'>
        <p id = 'name'>{props.data.name + ` `}</p><br></br>
        age: {props.data.age}<br></br>
        email: {props.data.email}
    </div>
    )}

export default Friend;