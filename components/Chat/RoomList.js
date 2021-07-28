import React from "react";
import { View, Text } from "react-native"; //Remove unused import
import { useSelector } from "react-redux";

//Components
import RoomItem from "./RoomItem";

//Styling
import { List, Spinner } from "native-base";

const RoomList = ({ navigation }) => {
  const users = useSelector((state) => state.usersList.usersList);
  console.log(users);
  const loading = useSelector((state) => state.usersReducer.loading);
  if (loading) return <Spinner />;

  //Change to const
  let chatArray = users.map((user) => (
    <RoomItem user={user} key={user.id} navigation={navigation} />
  ));
  return <List>{chatArray}</List>;
};

export default RoomList;
