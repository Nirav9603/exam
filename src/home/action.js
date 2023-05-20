import {
    GET_DATA,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED
  } from "./actionType";
  
  /**
   * Get All Post Api
   */
  export const getData = (payload) => ({
    type: GET_DATA,
    payload,
  });
  
  export const getHomeDataSuccess = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: data,
  });
  
  export const getHomeDataFailed = (error) => ({
    type: GET_DATA_FAILED,
    payload: error,
  });
  
  
  