import React, { useState } from "react";
import { List } from "native-base";
import { Text, View, Image, StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";
import { Button } from "native-base";
import { useDispatch } from "react-redux";
import { GiftedChat } from "react-native-gifted-chat";
// REVIEW: Remove imports that you're not using

const ChatItem = ({ message, navigation }) => {
  // REVIEW: quantity ha
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  return (
    <List>
      <Text>{message.content}</Text>
    </List>
  );
};

export default ChatItem;
