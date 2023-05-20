import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
  } from "./actionType";
  
  const initState = {
    loading: false,
    error: null,
    homePageData: null,
    homePageAddData: null
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      //Get All Users Api
      case GET_DATA:
        state = { ...state, loading: true };
        break;
      case GET_DATA_SUCCESS:
        state = {
          ...state,
          loading: false,
          homePageData: action.payload,
        };
        break;
      case GET_DATA_FAILED:
        state = { ...state, loading: false, error: action.payload };
        break;
      default:
        break;
    }
    return state;
  };
  