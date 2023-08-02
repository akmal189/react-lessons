import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={classes.dialogsItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={classes.dialogsMessages}>
            {props.text}
        </div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Саня', message: 'Здарова Саня'},
        {id: 2, name: 'Катя', message: 'Здарова Катя'},
        {id: 3, name: 'Паша', message: 'Здарова Паша'},
        {id: 4, name: 'Ваня', message: 'Здарова Ваня'},
    ]

    return (
        <div className={classes.dialogs}>
            <h1>Диалоги </h1>
            <div className={classes.dialogsInner}>
                <div className={classes.dialogsList}>
                    {dialogsData.forEach(function(item){
                        <DialogItem name={item.name} id={item.id}/>
                        console.log(item)
                    })}
                </div>
                <div className={classes.dialogsMessages}>
                    <MessageItem text="Привет Саня"/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
