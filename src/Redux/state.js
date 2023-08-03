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
            defaultValue: ''
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
            rerenderTree(store);
            console.log(store)
        } else if (action.type === 'update-dialog') {
            store.getState().dialogPage.defaultValue = action.newName;
            rerenderTree(store);
        } else if (action.type === 'subscribe') {
            rerenderTree = action.observer;
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