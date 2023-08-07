import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem2';
import MessageItem from './MessagesItem2';
import DialogForm from './DialogForm2';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <h1>Диалоги </h1>
            <div className={classes.dialogsInner}>
                <div className={classes.dialogsList}>
                    {
                        props.state.dialogsPage.dialogs.map((el) => {
                            return <DialogItem name={el.name} id={el.id} key={el.id} dispatch={props.dispatch}/>
                        })
                    }
                </div>
                <div className={classes.dialogsMessages}>
                    {
                        props.state.dialogsPage.messages.map((el) => {
                            return <MessageItem text={el.message} key={el.id}/>
                        })
                    }
                </div>
            </div>
            <DialogForm dispatch={props.dispatch} addDialog={props.addDialog} defaultValue={props.defaultValue} updateNewDialog={props.updateNewDialog}/>
        </div>
    );
}

export default Dialogs;
