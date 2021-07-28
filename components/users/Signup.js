import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Styling
import { Input, Button, Center } from "native-base";
import { ImageBackground } from "react-native";
import PhoneInput from "react-native-phone-number-input";

//Actions
import { signup } from "../../store/actions/authActions";

const Signup = ({ navigation }) => {
  dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phonenumber: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, navigation));
  };

  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }} //Remove inline styling
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
          style={{ width: "100%" }} //Remove inline styling
        />
        <PhoneInput
          placeholder="phonenumber"
          onChangeText={(value) => setUser({ ...user, phonenumber: value })}
          color="black"
          backgroundColor="white"
          style={{ width: "100%" }} //Remove inline styling
        />
        <Button onPress={handleSubmit}>Signup</Button>
      </Center>
    </ImageBackground>
  );
};
export default Signup;
