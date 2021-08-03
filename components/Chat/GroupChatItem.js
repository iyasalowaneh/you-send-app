import React from "react";
import { List } from "native-base";
import { Text} from "react-native";
import { useSelector } from "react-redux";

const GroupChatItem = ({ message }) => {
    


  return (
    <List>
  
      <Text
      >
        {message.content}
      </Text>
      
    </List>
  );
};

export default GroupChatItem;
