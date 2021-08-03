import React from "react";
import {  TouchableOpacity , Image } from "react-native";
import { List } from 'react-native-paper';

// import { Image } from "../../styles";
const RoomGroupItem = ({ room, navigation }) => {


  return (
    <TouchableOpacity
            onPress= {() => navigation.navigate('ChatList',{roomId:room.id})}>
    <List.Item
    title={room.name}
    description={room.status}
    left={props => <Image
        style={{ width: "10%", height: "55%" }}
       source={{ uri: room.image  }} />}
      //  uri: room.image

  /></TouchableOpacity>
  );
  
};

export default RoomGroupItem;
