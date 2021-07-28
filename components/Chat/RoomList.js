import React from "react";
import { View, Text } from "react-native";
import { List, Spinner } from "native-base";

//components
import RoomItem from "./RoomItem";

// Styling

import { useSelector } from "react-redux";

const RoomList = ({ navigation }) => {
  const users = useSelector((state) => state.usersList.usersList);
  console.log(users)
  const loading = useSelector((state) => state.usersReducer.loading);
  if (loading) return <Spinner />;

  let chatArray = users.map((user) => (
    <RoomItem user={user} key={user.id} navigation={navigation} />
  ));
  return <List>{chatArray}</List>;
};

export default RoomList;
