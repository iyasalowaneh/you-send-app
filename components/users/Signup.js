import React, { useState } from "react";
import { Button, Center } from "native-base";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { TextInput ,StyleSheet} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    phonenumber: "",
    image: "",
    status: ""
   
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user,navigation));
  };
  return (
    <
    >

      <TextInput 
        placeholder="name"
        onChangeText={(value) => setUser({ ...user, name: value })}
        autoCapitalize="none"
        style={styles.input}
        color="black"
        backgroundColor="white"

      />
      <TextInput 
      placeholder="status"
      onChangeText={(value) => setUser({ ...user, status: value })}
      autoCapitalize="none"
      style={styles.input}
      color="black"
      backgroundColor="white"

    />
    <TextInput 
    placeholder="image"
    onChangeText={(value) => setUser({ ...user, image: value })}
    autoCapitalize="none"
    style={styles.input}
    color="black"
    backgroundColor="white"

  />
  <Center >
 <PhoneInput
        placeholder="phonenumber"
        onChangeText={(value) => setUser({ ...user, phonenumber: value })}
      
        style={styles.input}
      />
   </Center>
      <Button onPress={handleSubmit}>Signup</Button>
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
export default Signup;
