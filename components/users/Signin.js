import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Styling
import { Input, Button, Center } from "native-base";
import { ImageBackground } from "react-native";
import PhoneInput from "react-native-phone-number-input";

//Actions
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, navigation));
  };
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }} //Remove inline styling
      source={{
        uri: "http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg",
      }}
    >
      <Center flex={1}>
        <>
          <PhoneInput
            placeholder="phonenumber"
            onChangeText={(value) => setUser({ ...user, username: value })}
            autoCapitalize="none"
            color="black"
            backgroundColor="white"
            style={{ width: "100%" }} //Remove inline styling
          />
          <Input
            placeholder="code"
            onChangeText={(value) => setUser({ ...user, password: value })}
            color="black"
            backgroundColor="white"
            style={{ width: "100%" }} //Remove inline styling
          />
          <Button onPress={handleSubmit}>Signin</Button>
        </>
      </Center>
    </ImageBackground>
  );
};
export default Signin;
