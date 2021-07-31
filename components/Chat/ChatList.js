import React,{ useState } from "react";
import { List,Spinner ,Input,Button} from "native-base";
import {  Text } from "react-native";
import { useDispatch } from "react-redux";
import {addMessage} from "../../store/actions/messageActions";
//components
import ChatItem from "./ChatItem";

// Styling
import { useSelector } from "react-redux";

const ChatList = ( {navigation }) => {
    const messages = useSelector((state) => state.messages.messages);
console.log(messages)
const [message, SetMessage] = useState({
    content: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    SetMessage({ ...message, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage(message));
  };

const loading = useSelector((state) => state.messages.loading);
  if (loading) return <Spinner />;
  let chatArray = messages.map((message) => (
    <ChatItem message={message} key={message.id} navigation={navigation} />
  ));
  return <><Text><List>{chatArray}</List></Text>
 <Input
  placeholder="message"
  onChangeText={(value) => SetMessage({ ...message, content: value })}
  color="black"
  backgroundColor="white"
  style={{  width: "100%" }}
  />
        <Button onPress={handleSubmit}>Send</Button>

  </>
};

export default ChatList;
