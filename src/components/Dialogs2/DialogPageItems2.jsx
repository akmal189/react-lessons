import React from 'react';
import classes from './Dialogs.module.css';

const DialogPageItems = (props) => {

    return (
        <div className={classes.DialogPageItems}>
            <div className={classes.toMe}>{props.toMe}</div>
            <div className={classes.fromMe}>{props.fromMe}</div>
        </div>
    );
}

export default DialogPageItems;
