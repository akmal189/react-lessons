import React from "react";
import classes from './Dialogs.module.css'
import state from "../../Redux/state";

const DialogForm = (props) => {

    let formName = React.createRef(),
        formText = React.createRef();

    let addDialog = () => {
        props.addDialog(5, formName.current.value, formText.current.value)
        formName.current.value = '';
        formText.current.value = '';
    }
    
    return (
        <div className={classes.DialogForm}>
            <div className={classes.formField}>
                <input type="text" placeholder="Имя"  ref={formName}/>
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