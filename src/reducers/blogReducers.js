import { CREATE_BLOG,
    UPDATE_BLOG,
    DELETE_BLOG,
    UPDATE_INDEX,
    SIGN_IN,
    SIGN_OUT,CLEAR_ERROR_MESSAGE,ADD_ERROR} from "../actions/types";

export const blogReducer = (state,action) => {
    var list = JSON.parse(localStorage.getItem('blogs'))
    switch(action.type){
        case CREATE_BLOG:
            list.push(action.payload)
            localStorage.setItem('blogs',JSON.stringify(list))
            return {list,currentIndex:-1}
        case UPDATE_BLOG:
            list[state.currentIndex] = action.payload
            localStorage.setItem('blogs',JSON.stringify(list))
            return {list,currentIndex : -1}
        case DELETE_BLOG:
            list.splice(action.payload,1)
            localStorage.setItem('blogs',JSON.stringify(list))
            return {list,currentIndex : -1}

        case UPDATE_INDEX:
            return {list,currentIndex:action.payload}
        case SIGN_IN:
            return { ...state, token: action.payload };

        case SIGN_OUT:
            return { ...state, token: null };
        case CLEAR_ERROR_MESSAGE:
                return { ...state, errorMessage: "" };
        case ADD_ERROR:
                return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}