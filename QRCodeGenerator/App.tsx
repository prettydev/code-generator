import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "./src/HomeScreen";
import QRScreen from "./src/QRScreen";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
