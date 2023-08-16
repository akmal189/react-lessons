const updateNewPostText = 'updateNewPostText';
const add_post = 'add-post';

let initialState = {
    posts: [
        {id: 1, message: 'asd', likesCount: 111},
        {id: 2, message: '222', likesCount: 22},
        {id: 3, message: '3333', likesCount: 3}
    ],
    defaultMessageValue: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case add_post:
            let newPost = {
                id: 4, 
                message: state.defaultMessageValue, 
                likesCount: 0
            }
            state.posts.push(newPost);
            state.defaultMessageValue = '';

            return state;
        case updateNewPostText:
            state.defaultMessageValue = action.newText;
            
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: add_post
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}

export default profileReducer;