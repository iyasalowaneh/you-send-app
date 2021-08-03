import { Input } from "native-base";
import React, { useState } from "react";
import { Button ,Center} from "native-base";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { TextInput ,StyleSheet} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, navigation));
  };
  return (<
  >

  <Center>
   
  <PhoneInput
    placeholder="phonenumber"
    onChangeText={(value) => setUser({ ...user, username: value })}
    autoCapitalize="none"
    color="black"
    backgroundColor="white"
    style={{  width: "100%" }}

  /> </Center>
      <TextInput
        placeholder="code"
        onChangeText={(value) => setUser({ ...user, password: value })}
        style={styles.input}
        color="black"
        backgroundColor="white"
        />
       
      <Button onPress={handleSubmit}>Signin</Button>
      
   
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 57,
    width:310,
    marginLeft:40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Signin;
