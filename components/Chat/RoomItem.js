import React from "react";
import {  TouchableOpacity , Image ,StyleSheet} from "react-native";
import { List, } from 'react-native-paper';

const RoomItem = ({ user, navigation }) => {
  return (
    <TouchableOpacity
            onPress={() => navigation.navigate('ChatList',{reciverId:user.id})}
          >
    <List.Item
    title={user.name}
    description={user.status}
    left={props => <Image
        style={{ width: "10%", height: "55%" }}
       source={{uri: user.image  }} />}
      //  uri: user.image

  /></TouchableOpacity>
  );
  
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  listTitle: {
    fontSize: 22
  },
  listDescription: {
    fontSize: 16
  }
});
// onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
export default RoomItem;
