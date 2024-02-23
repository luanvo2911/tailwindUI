import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Animated from "react-native-reanimated";

const Home = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const onPressed = () => {
    navigation.navigate("Signin");
  };
  return (
    <View style={tw`bg-[#0065FF] w-full h-full flex justify-around py-6`}>
      <Text style={tw`font-bold text-3xl text-center`}>Let's Get Started</Text>
      <View style={tw`flex-row justify-center`}>
        <Animated.Image
          source={require("../assets/asset3.png")}
          style={{ width: 300, height: 300 }}
          sharedTransitionTag="sharedTag"
          
        />
      </View>
      <View>
        <TouchableOpacity
          style={tw`py-3 bg-yellow-400 mx-7 rounded-xl`}
          onPress={onPressed}
        >
          <Text style={tw`text-center font-bold text-xl text-gray-700`}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
