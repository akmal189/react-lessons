//import dialogsReducer from "./dialogReducer";
let rerenderTree = () => {
    console.log('asd')
}

let store = {
    _state: {
        dialogPage: {
            dialogsData: [
                { id: 1, name: 'Саня', message: 'Здарова Саня' },
                { id: 2, name: 'Катя', message: 'Здарова Катя' },
                { id: 3, name: 'Паша', message: 'Здарова Паша' },
                { id: 4, name: 'Ваня', message: 'Здарова Ваня' },
            ],
            dialogMessages: [
                {id: 1, messageToMe: [{id: 1, msg: 'Hi 1'}], messageFromMe: [{id: 1, msg: 'Hi! How are you?'}, {id: 2, msg: 'I am fine. And you?'}]},
                {id: 2, messageToMe: [{id: 2, msg: 'Hi 2'}], messageFromMe: [{id: 2, msg: 'Hi! How are you?'}]},
                {id: 3, messageToMe: [{id: 3, msg: 'Hi 3'}], messageFromMe: [{id: 3, msg: 'Hi! How are you?'}]},
                {id: 4, messageToMe: [{id: 4, msg: 'Hi 4'}], messageFromMe: [{id: 4, msg: 'Hi! How are you?'}]},
            ],
            newNameInput: '',
            newMessageBody: '',
            defaultValue: '',
            dialogPageMessageValue: ''
        }
    },
    getState() {
        return this._state;
    },
    dispatchEvent(action) {

        //this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        if (action.type === 'subscribe') {
            rerenderTree = action.observer;
        }
        rerenderTree(store)
    }
}

export default store;