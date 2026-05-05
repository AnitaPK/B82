import React from 'react'
import './Profile.css'
import uImage from '../assets/userImage.jpeg'

const Profile = (props) => {
    console.log(props)
    console.log(props.user)
    const {name, email,cNum} = props.user
    const headingName = {textAlign:"center", textDecoration:"underline"}
  return (
    <>
    <div style={{fontSize:"30px", color:"red"}}>User Profile</div>
    <h1 style={headingName}>{name}</h1>
    <code>Email : {email}</code>
    <code className='phoneNumber'>Contact Number : {cNum}</code>
    <img src={uImage} alt="user image" className='imgProfile'/>
    </>
  )
}

export default Profile