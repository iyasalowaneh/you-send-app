import { Input } from "native-base";
import React, { useState } from "react";
import { Button ,Center} from "native-base";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { ImageBackground } from "react-native";

const Signin = ({ navigation }) => {
  dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, navigation));
  };
  return (<ImageBackground
    style={{ flex: 1, width: "100%", height: "100%" }}
    source={{
      uri: "http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg",
    }}
  >

<Center flex={1}>
    <>
      <Input
        placeholder="phonenumber"
        onChangeText={(value) => setUser({ ...user, username: value })}
        autoCapitalize="none"
        color="black"
        backgroundColor="white"
        style={{  width: "100%" }}

      />
      <Input
        placeholder="code"
        onChangeText={(value) => setUser({ ...user, password: value })}
        color="black"
        backgroundColor="white"
        style={{  width: "100%" }}
        />
      <Button onPress={handleSubmit}>Signin</Button>
      </>
    </Center>
    </ImageBackground>
  );
};
export default Signin;