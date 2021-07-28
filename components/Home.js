import React from "react";

//Styling
import { Button, Center } from "native-base";
import { ImageBackground, View, Text } from "react-native"; //Remove unused import

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1, width: "100%", height: "100%" }} //Remove inline styling
      source={{
        uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
      }}
    >
      <Center flex={1}>
        {/*Remove inline styling */}
        <Text style={{ color: "#fff", fontSize: "38px", textAlign: "center" }}>
          Things
        </Text>
        {/*Change to Shops */}
        <Button onPress={() => navigation.navigate("ShopList")}>SHOPS</Button>
        <Button onPress={() => navigation.navigate("Signin")}>Signin</Button>
        <Button onPress={() => navigation.navigate("Signup")}>Signup</Button>
      </Center>
    </ImageBackground>
  );
};
export default Home;
