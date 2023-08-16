import React from "react";
import classes from './Dialogs.module.css';

const DialogForm = (props) => {

    let formName = React.createRef(),
        formText = React.createRef();

    let addDialogActionCreator = () => {
        return {
            'type': 'add_dialog', 
            'id': 5, 
            'name': formName.current.value, 
            'message': formText.current.value
        }
    }

    let addDialog = () => {
        //props.addDialog(5, formName.current.value, formText.current.value)
        props.dispatch(addDialogActionCreator());
        props.state.getState().dialogsPage.newMessageText = '';
        props.state.getState().dialogsPage.newDialogMessage = '';
    }

    let onDialogChange = (e) => {
        let name = e.target.value;
        props.state.getState().dialogsPage.newMessageText = name;
        props.dispatch({'type':'newMessageText','newMessage':name})
        //props.updateNewDialog(name)
    }
    
    let onDialogChange2 = (e) => {
        let text = e.target.value;
        props.state.getState().dialogsPage.newDialogMessage = text;
        props.dispatch({'type':'updateDialogMessage','newMessage':text})
        //props.updateNewDialog(name)
    }

    return (
        <div className={classes.DialogForm}>
            <div className={classes.formField}>
                <input type="text" placeholder="Имя"  ref={formName} onChange={onDialogChange} value={props.state.dialogsPage.newMessageText}/>
            </div>
            <div className={classes.formField}>
                <textarea type="text" placeholder="Текст" ref={formText} onChange={onDialogChange2} value={props.state.dialogsPage.newDialogMessage}></textarea>
            </div>
            <div className={classes.formField}>
                <button onClick={addDialog}>Добавить</button>
            </div>
        </div>
    )
}

export default DialogForm;