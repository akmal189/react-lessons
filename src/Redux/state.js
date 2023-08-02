import { rerenderTree } from "../render"

let state = {
    dialogsData: [
        { id: 1, name: 'Саня', message: 'Здарова Саня' },
        { id: 2, name: 'Катя', message: 'Здарова Катя' },
        { id: 3, name: 'Паша', message: 'Здарова Паша' },
        { id: 4, name: 'Ваня', message: 'Здарова Ваня' },
    ]
}


export let addDialog = (dialogId, dialogName, dialogMessage) => {
    console.log(dialogName)
    state.dialogsData.push({
        id: dialogId,
        name: dialogName,
        message: dialogMessage
    })
    console.log(state)
    rerenderTree(state);
}

export default state;