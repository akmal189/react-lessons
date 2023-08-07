import React from "react";
import classes from './Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={classes.dialogsMessages}>
            {props.text}
        </div>
    )
}

export default MessageItem;