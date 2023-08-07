import React from "react";
import classes from "./MyPosts.module.css"
import PostItem from "./Post/PostItem";

const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
        <div className={classes.Profile}>
            <div className={classes.PostAddForm}>
                <div className={classes.messageBody}>
                    <textarea ref={newPostElement}></textarea>
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