import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <h1>{props.title}</h1>
            <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;