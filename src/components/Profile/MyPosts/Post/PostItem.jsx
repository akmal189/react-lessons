import React from "react";

const PostItem = (props) => {
    return (
        <div className="classes postItem">{props.post} Like <b>{props.likesCount}</b></div>
    )
}

export default PostItem;