import React from "react";
import classes from "./MyPosts.module.css"
import PostItem from "./Post/PostItem";
import { addPostActionCreator } from "../../../redux/profilesReducer";
import { updateNewPostTextActionCreator } from "../../../redux/profilesReducer";

const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
        //props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={classes.Profile}>
            <div className={classes.PostAddForm}>
                <div className={classes.messageBody}>
                    <textarea ref={newPostElement} value={props.state.profilePage.defaultMessageValue} onChange={onPostChange}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <hr />
            <div className={classes.myPosts}>
                {
                    props.state.profilePage.posts.map((el) => {
                        return <PostItem post={el.message} likesCount={el.likesCount} key={el.id} dispatch={props.dispatch}/>
                    })
                }
            </div>
        </div>
    )
}

export default MyPosts;