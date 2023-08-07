import React from "react";
import classes from './Dialogs.module.css';
import DialogPageItems from "./DialogPageItems2";
import store from "../../Redux/store";

const DialogPage = (props) => {
    let messageBody = React.createRef();
    let onMessageBodyChange = () => {
        let messageBodyText = messageBody.current.value;
        props.dispatch({'type': 'upd-dialogue-message', 'id': 1, 'message': messageBodyText})
    }
    let sendMessage = () => {
        let messageBodyText = messageBody.current.value;
        props.dispatch({'type': 'send-dialogue-message', 'id': 1, 'message': messageBodyText})
        messageBody.current.value = ''
        store._state.dialogPage.dialogPageMessageValue = ''
    }
    let newMessageBody = store.getState().dialogPage.dialogPageMessageValue;
    return (
        <div className={classes.dialogPage}>
            <h1>{props.title}</h1>
            <div className={classes.dialogBody}>
                {
                    props.dialogMessages.map((el) => (
                        
                        el.messageToMe.map((el2) => {
                            if(el.id === 1) {
                                return <DialogPageItems toMe={el2.msg}  key={el2.id}/>
                            }
                        })
                    ))
                }
                {
                    props.dialogMessages.map((el) => (
                        
                        el.messageFromMe.map((el2) => {
                            if(el.id === 1) {
                                return <DialogPageItems fromMe={el2.msg}  key={el2.id}/>
                            }
                        })
                    ))
                }
                
            </div>
            <div className={classes.messageForm}>
                <div className={classes.messageBody}>
                    <textarea ref={messageBody} onChange={onMessageBodyChange} placeholder="Enter your message" value={newMessageBody}></textarea>
                </div>
                <div className={classes.sendBtn}>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default DialogPage;