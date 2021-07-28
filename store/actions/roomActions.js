import * as actionTypes from "./types";
import instance from "./instance";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data,
      });
      console.log(res.data); //Remove console log
    } catch (error) {
      console.log(error);
    }
  };
};
