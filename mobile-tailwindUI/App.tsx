import Home from "./src/Home";
import Signin from "./src/Signin";
import Signup from "./src/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fromRight } from "react-navigation-transitions";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Signin" component={Signin}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
