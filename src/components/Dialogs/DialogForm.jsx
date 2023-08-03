import React from "react";
import classes from './Dialogs.module.css'
import store from "../../Redux/state";

const DialogForm = (props) => {

    let formName = React.createRef(),
        formText = React.createRef();

    let addDialog = () => {
        props.addDialog(5, formName.current.value, formText.current.value)
        store.getState().dialogPage.defaultValue = '';
        formText.current.value = '';
    }

    let onDialogChange = () => {
        let name = formName.current.value;
        store.getState().dialogPage.defaultValue = name;
        props.updateNewDialog(name)
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