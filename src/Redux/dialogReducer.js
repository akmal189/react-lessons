/*let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'add-dialog':
            state.dialogsData.push({
                id: action.id,
                name: action.name,
                message: action.message
            })
            state.defaultValue = '';
            
            return state;
        case 'update-dialog':
            state.defaultValue = action.newName;

            return state;
        case 'upd-new_message':
            state.newMessageBody = action.messageBody;

            return state;
        case 'send-message':
            let body = state.newMessageBody = action.messageBody;
            state.newMessageBody = '';
            state.dialogMessages.push({
                id: 6,
                message: body
            })

            return state;
        case 'close-dialogue':
            function removeObjectWithId(arr, id) {
                const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
              
                if (objWithIdIndex > -1) {
                  arr.splice(objWithIdIndex, 1);
                }
            }
              
            let arr = state.dialogsData
              
            removeObjectWithId(arr, action.id);

            return state;
        case 'upd-dialogue-message':
            state.dialogPageMessageValue = action.message;

            return state;
        case 'send-dialogue-message':
            state.dialogMessages.forEach(function(item){
                if(item.id === action.id) {
                    item.messageFromMe.push({
                        id: 5,
                        msg: action.message
                    })
                }
            })
            state.dialogPageMessageValue = ''
            
            return state;
        default: 
            return state;
    }
}

export default dialogsReducer;*/


const updateNewMessageText = 'newMessageText';
const UPDATE_DIALOG_MESSAGE = 'updateDialogMessage';
const ADD_DIALOG = 'add_dialog';

let initialState = {
    newMessageText: '',
    newDialogMessage: '',
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Dorou' }
    ],
    dialogs: [
        { id: 1, name: 'Alex', message: 111 },
        { id: 2, name: 'Tony', message: 22 },
        { id: 3, name: '3333', message: 3 }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case updateNewMessageText:
            state.newMessageText = action.newMessage;

            return state;
        case UPDATE_DIALOG_MESSAGE:
            state.newDialogMessage = action.newMessage;

            return state;
        case ADD_DIALOG:
            let dialog_name = state.newMessageText;
            let dialog_message = state.newDialogMessage;

            state.newMessageText = '';
            state.newDialogMessage = '';
            state.dialogs.push({ 'id': 6, 'name': dialog_name })
            state.messages.push({ 'id': 6, 'message': dialog_message })

            return state;
        default:
            return state;
    }


}

export default dialogsReducer;