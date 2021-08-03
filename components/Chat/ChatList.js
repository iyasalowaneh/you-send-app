import React,{ useReducer, useState } from "react";
import { List,Spinner ,Input,Button} from "native-base";
import {  Text } from "react-native";
import { useDispatch } from "react-redux";
import {addMessage} from "../../store/actions/messageActions";
import {addMessagetoGroup} from "../../store/actions/messageActions";
//components
import GroupChatItem from "./GroupChatItem";
// Styling
import { useSelector } from "react-redux";

const ChatList = ( {navigation,route }) => {
    const messages = useSelector((state) => state.messages.messages);
    const rooms = useSelector((state) => state.rooms.rooms);
    const { roomId } = route.params;
    const { reciverId } = route.params;

    const loading = useSelector((state) => state.messages.loading);
  if (loading) return <Spinner />;

// console.log(messages)
const [message, SetMessage] = useState({
  reciverId:reciverId,
    content: "",
  });
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addMessage(message));
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    dispatch(addMessagetoGroup(message, roomId));
  };



  let groupMessages= messages.filter((message)=>(message.roomId===roomId)||(message.reciverId===reciverId))


  //  let groupMessages= messages.filter((message)=>message.reciverId===reciverId)

  let chatGroupArray = groupMessages.map((message) => (
    <GroupChatItem  message={message} key={message.id} navigation={navigation} />
  ));
 
  //let chatArray = messages.map((message) => (
    //<ChatItem message={message} key={message.id} navigation={navigation} />
  //));


      
 
    if (reciverId > 0) return  (<><Text><List>{chatGroupArray}</List></Text>
 <Input
  placeholder="message"
  onChangeText={(value) => SetMessage({ ...message, content: value })}
  color="black"
  backgroundColor="white"
  style={{  width: "100%" }}
  />
        <Button onPress={handleSubmit}>Send</Button>

  </>)


return (<><Text><List>{chatGroupArray}</List></Text>
  <Input
   placeholder="message"
   onChangeText={(value) => SetMessage({ ...message, content: value })}
   color="black"
   backgroundColor="white"
   style={{  width: "100%" }}
   />
         <Button onPress={handleSubmit2}>Send</Button>
 
   </>)
};

export default ChatList;
