import React from "react";


// Components
import RoomItem from "./RoomItem";
import RoomGroupItem from "./RoomGroupItem";
// Styling
import { View, Text } from "react-native";
import { List, Heading, Box, Center, NativeBaseProvider ,Spinner} from "native-base"

import { useSelector } from "react-redux";

const RoomList = ({ navigation }) => {
  const users = useSelector((state) => state.usersList.usersList);
  const rooms = useSelector((state) => state.rooms.rooms);
  //console.log(users)

//console.log(rooms)
  const loading = useSelector((state) => state.usersReducer.loading);
  const loadingRoom = useSelector((state) => state.usersReducer.loading);
if (loading || loadingRoom) return <Spinner />;

  let chatArray = users.map((user) => (
    <RoomItem user={user} key={user.id} navigation={navigation} />
  ));

  let roomArray = rooms.map((room) => (
    <RoomGroupItem room={room} key={room.id} navigation={navigation} />
  ));

  return  <Box w="80%"> <List>{chatArray}</List>
  <Text>Groups</Text>
  <List>{roomArray}</List></Box>
 
};

export default RoomList;
