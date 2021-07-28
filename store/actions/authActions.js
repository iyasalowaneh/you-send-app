import AsyncStorage from "@react-native-async-storage/async-storage";
import * as actionTypes from "./types";
import decode from "jwt-decode";
import instance from "./instance";





export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data,
      });        
       console.log(res.data)

    } catch (error) {
      console.log(error);
    }
  };
};



export const signup = (newUser,navigation) => {
  console.log(newUser)
  return async () => {
    try {
      const res = await instance.post("/signup", newUser);
      navigation.push("Signin");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
console.log(userData)
      dispatch(setUser(res.data.token));
      navigation.push("RoomList");
      console.log(res.data.token)

    } catch (error) {
      console.log(error);
    }
  };
};
export const signout = () => {
  return setUser();
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp >= currentTime) {
      dispatch(setUser(token));
    }
  } else {
    AsyncStorage.removeItem("myToken");
    dispatch(signout());
  }
};

const setUser = (token) => {
  AsyncStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: actionTypes.SET_USER,
    payload: decode(token),
  };
};
