import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Button, Center } from "native-base";

const Home = ({ navigation }) => {
  // REVIEW: Move inline styling into its own file
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
      }}
    >
      <Center flex={1}>
        <Text style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
          Things
        </Text>
        {/* Why do you have a shop list? */}
        <Button onPress={() => navigation.navigate("ShopList")}>SHOPS</Button>
        <Button onPress={() => navigation.navigate("Signin")}>Signin</Button>
        <Button onPress={() => navigation.navigate("Signup")}>Signup</Button>
      </Center>
    </ImageBackground>
  );
};
export default Home;
