import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import tw from "twrnc";

import { NavigationProp, ParamListBase } from "@react-navigation/native";
import Animated from "react-native-reanimated";

const Signup = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const onPressedBack = () => {
    navigation.navigate("Signin");
  };
  return (
    <View style={tw` w-full h-full flex bg-[#0065FF]`}>
      <SafeAreaView style={tw` pt-6  flex justify-center`}>
        <View style={tw`flex justify-start py-4 `}>
          <TouchableOpacity
            style={tw`bg-amber-300 p-2 rounded-tr-2xl rounded-bl-2xl w-18 m-2`}
            onPress={onPressedBack}
          >
            <Text style={tw`font-bold text-xl text-center`}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Animated.Image
            source={require("../assets/asset3.png")}
            style={{ width: 150, height: 150 }}
            sharedTransitionTag="sharedTag"
          />
        </View>
      </SafeAreaView>
      <View style={tw`flex-1 bg-white rounded-t-3xl`}>
        <View style={tw`p-4`}>
          <Text style={tw`mx-2 p-2 text-lg font-bold`}>Email</Text>
          <TextInput
            style={tw`p-2 bg-slate-300 mx-2 rounded-lg`}
            value="john@gmail.com"
          />
          <Text style={tw`mx-2 p-2 text-lg font-bold`}>Your Full Name</Text>
          <TextInput
            style={tw`p-2 bg-slate-300 mx-2 rounded-lg`}
            value="John Smith"
          />
          <Text style={tw`mx-2 p-2 text-lg font-bold`}>Password</Text>
          <TextInput
            style={tw`p-2 bg-slate-300 mx-2 rounded-lg`}
            value="123456789"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={tw`flex items-end mx-2`}>
          <Text style={tw`mx-4 font-bold`}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-yellow-400 p-2 rounded-3xl m-4`}>
          <Text style={tw`text-center font-bold text-xl`}>Sign in</Text>
        </TouchableOpacity>
        <View>
          <Text style={tw`text-center font-bold text-2xl`}>Or</Text>
        </View>
        <View style={tw`flex-row justify-around mx-2 p-2`}>
          <TouchableOpacity style={tw`bg-slate-100 rounded-full p-2`}>
            <Image
              source={require("../assets/icons/apple.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-slate-100 rounded-full p-2`}>
            <Image
              source={require("../assets/icons/facebook.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-slate-100 rounded-full p-2`}>
            <Image
              source={require("../assets/icons/google.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={tw`flex-row items-center justify-center my-2`}>
          <Text style={tw`font-bold`}>Don't have an account?</Text>
          <TouchableOpacity style={tw`mx-2`} >
            <Text style={tw`text-yellow-400 font-bold`} onPress={onPressedSignup}>Sign up</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default Signup;
