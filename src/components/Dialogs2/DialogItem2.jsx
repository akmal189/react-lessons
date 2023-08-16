import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    let closeDialogue = (e) => {
        let itemId = +e.target.dataset.id;
        props.dispatch({'type': 'close-dialogue', id: itemId});
    }
    return (
        <div className={classes.dialogsItem}>
            <a href="javascript:void(0);" className={classes.dialogCloser} onClick={closeDialogue} data-id={props.id}>x</a>
            <NavLink to={path}>
                <b>{props.name}</b>
                {props.message}
            </NavLink>
        </div>
    )
}

export default DialogItem;