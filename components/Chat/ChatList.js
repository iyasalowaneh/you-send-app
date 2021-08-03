import React,{ useReducer, useState, useCallback, useEffect } from "react";
import { List,Spinner ,Input,Button} from "native-base";
import {  Text } from "react-native";
import { useDispatch } from "react-redux";
import {addMessage} from "../../store/actions/messageActions";
import {addMessagetoGroup} from "../../store/actions/messageActions";
import { GiftedChat } from 'react-native-gifted-chat'
//components
import GroupChatItem from "./GroupChatItem";
// Styling
import { useSelector } from "react-redux";

const ChatList = ( {navigation,route }) => {
  //   const messages = useSelector((state) => state.messages.messages);
  //   const rooms = useSelector((state) => state.rooms.rooms);
  //   const { roomId } = route.params;
  //   const { reciverId } = route.params;

  //   const loading = useSelector((state) => state.messages.loading);
  // if (loading) return <Spinner />;

// console.log(messages)
// const [message, SetMessage] = useState({
//   reciverId:reciverId,
//     content: "",
//   });
//   const dispatch = useDispatch();
  
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     dispatch(addMessage(message));
//   };

//   const handleSubmit2 = (event) => {
//     event.preventDefault();

//     dispatch(addMessagetoGroup(message, roomId));
//   };



//   let groupMessages= messages.filter((message)=>(message.roomId===roomId)||(message.reciverId===reciverId))


//   //  let groupMessages= messages.filter((message)=>message.reciverId===reciverId)

//   let chatGroupArray = groupMessages.map((message) => (
//     <GroupChatItem  message={message} key={message.id} navigation={navigation} />
//   ));
 
  //let chatArray = messages.map((message) => (
    //<ChatItem message={message} key={message.id} navigation={navigation} />
  //));


  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello hello',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
 
    

export default ChatList;
