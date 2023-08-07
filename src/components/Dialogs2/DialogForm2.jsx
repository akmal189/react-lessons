import React from "react";
import classes from './Dialogs.module.css'
import store from "../../Redux/store";

const DialogForm = (props) => {

    let formName = React.createRef(),
        formText = React.createRef();

    let updateDialogActionCreator = () => {
        let name = formName.current.value;
        return {
            type: 'update-dialog', 
            newName: name
        }
    }
    let addDialogActionCreator = () => {
        return {
            'type': 'add-dialog', 
            'id': 5, 
            'name': formName.current.value, 
            'message': formText.current.value
        }
    }

    let addDialog = () => {
        //props.addDialog(5, formName.current.value, formText.current.value)
        props.dispatch(addDialogActionCreator());
        store.getState().dialogPage.defaultValue = '';
        formName.current.value = '';
        formText.current.value = '';
    }

    let onDialogChange = () => {
        let name = formName.current.value;
        store.getState().dialogPage.defaultValue = name;
        props.dispatch(updateDialogActionCreator())
        //props.updateNewDialog(name)
    }
    
    return (
        <div className={classes.DialogForm}>
            <div className={classes.formField}>
                <input type="text" placeholder="Имя"  ref={formName} onChange={onDialogChange} value={props.defaultValue}/>
            </div>
            <div className={classes.formField}>
                <textarea type="text" placeholder="Текст" ref={formText}></textarea>
            </div>
            <div className={classes.formField}>
                <button onClick={addDialog}>Добавить</button>
            </div>
        </div>
    )
}

export default DialogForm;