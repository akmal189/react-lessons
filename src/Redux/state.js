let rerenderTree = () => {
    console.log(123)
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
    addDialogFn: {
        addDialog(dialogId, dialogName, dialogMessage) {
            store.getState().dialogPage.dialogsData.push({
                id: dialogId,
                name: dialogName,
                message: dialogMessage
            })
            rerenderTree(store);
        }
    },
    updateNewDialogFn: {
        updateNewDialog(newName) {
            store.getState().dialogPage.defaultValue = newName;
            rerenderTree(store);
        }
    },
    subscribeFn: {
        subscribe(observer) {
            rerenderTree = observer;
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