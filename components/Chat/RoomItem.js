import React from "react";
import { Text, TouchableOpacity , Image ,StyleSheet} from "react-native";
import { List, Divider } from 'react-native-paper';

// import { Image } from "../../styles";
const RoomItem = ({ user, navigation }) => {
  return (
    <TouchableOpacity
            onPress={() => navigation.navigate('ChatList')}
          >
    <List.Item
    title={user.name}
    description={user.status}
    left={props => <Image
        style={{ width: "10%", height: "10%" }}
       source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  }} />}
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
