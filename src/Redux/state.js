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
        if(action.type === 'add-dialog') {
            store.getState().dialogPage.dialogsData.push({
                id: action.id,
                name: action.name,
                message: action.message
            })
            store.getState().dialogPage.defaultValue = ''
            rerenderTree(store);
        } else if (action.type === 'update-dialog') {
            store.getState().dialogPage.defaultValue = action.newName;
            rerenderTree(store);
        } else if (action.type === 'subscribe') {
            rerenderTree = action.observer;
        }  else if (action.type === 'upd-new_message') {
            store._state.dialogPage.newMessageBody = action.messageBody;
            rerenderTree(store);
        } else if (action.type === 'send-message') {
            let body = store._state.dialogPage.newMessageBody = action.messageBody;
            store._state.dialogPage.newMessageBody = '';
            store._state.dialogMessages.push({
                id: 6,
                message: body
            })
            rerenderTree(store);
        } else if (action.type === 'close-dialogue') {
            function removeObjectWithId(arr, id) {
                const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
              
                if (objWithIdIndex > -1) {
                  arr.splice(objWithIdIndex, 1);
                }
            }
              
            let arr = store.getState().dialogPage.dialogsData
              
            removeObjectWithId(arr, action.id);
            rerenderTree(store);
        } else if (action.type === 'upd-dialogue-message') {
            store._state.dialogPage.dialogPageMessageValue = action.message;
        } else if (action.type === 'send-dialogue-message') {
            store.getState().dialogPage.dialogMessages.forEach(function(item){
                if(item.id === action.id) {
                    item.messageFromMe.push({
                        id: 5,
                        msg: action.message
                    })
                }
            })
            store._state.dialogPage.dialogPageMessageValue = ''
            rerenderTree(store);
        }
    }
}


/*export let addDialog = (dialogId, dialogName, dialogMessage) => {
    state.dialogPage.dialogsData.push({
        id: dialogId,
        name: dialogName,
        message: dialogMessage
    })
    rerenderTree(state);
}*/

/*export let updateNewDialog = (newName) => {
    state.dialogPage.defaultValue = newName;
    rerenderTree(state);
}*/

/*export const subscribe = (observer) => {
    rerenderTree = observer;
} */
export default store;