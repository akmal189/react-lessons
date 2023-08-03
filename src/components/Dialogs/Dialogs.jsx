import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessagesItem';
import DialogForm from './DialogForm';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <h1>Диалоги </h1>
            <div className={classes.dialogsInner}>
                <div className={classes.dialogsList}>
                    {
                        props.dialogsData.map((el) => {
                            return <DialogItem name={el.name} id={el.id} key={el.id}/>
                        })
                    }
                </div>
                <div className={classes.dialogsMessages}>
                    {
                        props.dialogsData.map((el) => {
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
