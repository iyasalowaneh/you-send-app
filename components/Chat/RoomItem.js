import React from "react";
import { Text, View, Image } from "react-native";

// import { Image } from "../../styles"; //Remove unused import

//Remove unused prop
const ChatItem = ({ user, navigation }) => {
  return (
    <View>
      <Image
        style={{ width: "10%", height: "10%" }} //Remove inline styling
        source={{ uri: user.image }}
      />
      <Text>{user.name}</Text>
    </View>
  );
};
// onPress={() => navigation.navigate("ShopDetail", { shop: shop })} //Remove unused code
export default ChatItem;
