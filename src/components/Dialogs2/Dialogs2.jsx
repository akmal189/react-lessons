import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem2 from './DialogItem2';
import MessageItem from './MessagesItem2';
import DialogForm from './DialogForm2';

const Dialogs = (props) => {
console.log(props.state)
    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem2 name={d.name} id={d.id}/>)
    let messageElements = props.state.dialogsPage.messages.map(d => <DialogItem2 message={d.message} id={d.id}/>)


    return (
        <div className={classes.dialogs}>
            <h1>Диалоги </h1>
            <div className={classes.dialogsInner}>
                <div className={classes.dialogsList}>
                    {dialogsElements}
                </div>
                <div className={classes.dialogsMessages}>
                    {messageElements}
                </div>
            </div>
            <DialogForm state={props.state} dispatch={props.dispatch} addDialog={props.addDialog} defaultValue={props.defaultValue} updateNewDialog={props.updateNewDialog}/>
        </div>
    );
}

export default Dialogs;
