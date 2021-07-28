import React from "react";
import { Text, View, Image } from "react-native";

// import { Image } from "../../styles";
const ChatItem = ({ user, navigation }) => {
  return (
    <View>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={{ uri: user.image }}
      />
      <Text >
        {user.name}
      </Text>
    </View>
  );
};
// onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
export default ChatItem;
