import { CREATE_BLOG,UPDATE_BLOG,DELETE_BLOG,UPDATE_INDEX ,SIGN_IN,SIGN_OUT,CLEAR_ERROR_MESSAGE,ADD_ERROR} from "./types"
import history from "../history"
export const createBlog = (data) => {
    return{
        type:CREATE_BLOG,
        payload:data
    }
}

export const updateBLOG = (data) => {
    return{
        type:UPDATE_BLOG,
        payload:data
    }
}

export const deleteBlog = (index) => {
    return{
        type:DELETE_BLOG,
        payload:index
    }
}

export const updateIndex = (index) => {
    return{
        type:UPDATE_INDEX,
        payload:index
    }
}

// export const signIn = ({ email, password }) => {
//     return async (dispatch, getState) => {
//       try {
//         const response = await event.post("/accounts/login/", {
//           email: email,
//           password: password,
//         });
//         dispatch({
//           type: SIGN_IN,
//           payload: response.data.token,
//         });
//         localStorage.setItem("token", response.data.token);
//         history.push("/events");
//         console.log(response.data.token);
//       } catch (e) {
//         dispatch({
//           type: ADD_ERROR,
//           payload: "Please check your Email and Pasword",
//         });
//       }
//     };
//   };

export const signOut = () => {
    return async (dispatch) => {
      await localStorage.removeItem("token");
  
      dispatch({
        type: SIGN_OUT,
      });
      history.push("/login");
    };
  };

  export const clearErrorMessage = () => {
    return async (dispatch) => {
      try {
        const response = "";
        dispatch({
          type: CLEAR_ERROR_MESSAGE,
          payload: response,
        });
      } catch (e) {
        console.log(e);
      }
    };
  };