import React from "react";
import { View, Text } from "react-native";
import { List, Spinner } from "native-base";

// Components
import RoomItem from "./RoomItem";

// Styling

import { useSelector } from "react-redux";

const RoomList = ({ navigation }) => {
  const users = useSelector((state) => state.usersList.usersList);
  // REVIEW: Remove clgs if done
  console.log(users);
  const loading = useSelector((state) => state.usersReducer.loading);
  if (loading) return <Spinner />;
  // REVIEW: const not let :)))))))
  let chatArray = users.map((user) => (
    <RoomItem user={user} key={user.id} navigation={navigation} />
  ));
  return <List>{chatArray}</List>;
};

export default RoomList;
