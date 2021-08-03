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
        style={{ width: "10%", height: "10%" }}
       source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  }} />}
      //  uri: room.image

  /></TouchableOpacity>
  );
  
};

export default RoomGroupItem;
