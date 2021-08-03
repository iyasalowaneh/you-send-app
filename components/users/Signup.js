import { Input } from "native-base";
import React, { useState } from "react";
import { Button ,Center} from "native-base";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { ImageBackground } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phonenumber: "",
   
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user,navigation));
  };
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg",
      }}
    >
    <Center flex={1}>

      <Input
        placeholder="name"
        onChangeText={(value) => setUser({ ...user, name: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
        style={{  width: "100%" }}

      />
      <PhoneInput
        placeholder="phonenumber"
        onChangeText={(value) => setUser({ ...user, phonenumber: value })}
        color="black"
        backgroundColor="white"
        style={{  width: "100%" }}
        
      />
   
      <Button onPress={handleSubmit}>Signup</Button>
    </Center></ImageBackground>
  );
};
export default Signup;
