import dialogsReducer from "./dialogReducer";
import profileReducer from "./profilesReducer";

let store2 = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'asd', likesCount: 111},
                {id: 2, message: '222', likesCount: 22},
                {id: 3, message: '3333', likesCount: 3}
            ],
            defaultMessageValue: ''
        },
        dialogsPage: {
            newMessageText: '',
            newDialogMessage: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Dorou'}
            ],
            dialogs: [
                {id: 1, name: 'Alex', message: 111},
                {id: 2, name: 'Tony', message: 22},
                {id: 3, name: '3333', message: 3}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('asd')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatchEvent(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store2;