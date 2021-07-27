import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

//components
import Signin from "../users/Signin";
import Signup from "../users/Signup";
const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Signup"
      screenOptions={{
        cardStyle: { backgroundColor: "#ade8f4" },
        headerTintColor: "#03045e",
        headerStyle: {
          backgroundColor: "#00b4d8",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Signin" component={Signin} options={{ title: "Signin" }} />
      <Screen name="Signup" component={Signup} options={{ title: "Signup" }} />
    </Navigator>
  );
};

export default RootNavigator;
