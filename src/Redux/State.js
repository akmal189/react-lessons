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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Dorou'}
            ],
            dialogs: [
                {id: 1, name: 'Alex', likesCount: 111},
                {id: 2, name: 'Tony', likesCount: 22},
                {id: 3, name: '3333', likesCount: 3}
            ],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('asd')
    },
    addPost() {
        let newPost = {
            id: 4, 
            message: this._state.profilePage.defaultMessageValue, 
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.defaultMessageValue = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.defaultMessageValue = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatchEvent() {

    }
}

export default store2;