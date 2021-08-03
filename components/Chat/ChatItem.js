import React from "react";
import { List } from "native-base";
import { Text} from "react-native";

const ChatItem = ({ message }) => {
  
  return (
    <List>
  
      <Text
      >
        {message.content}
      </Text>
      
    </List>
  );
};

export default ChatItem;
