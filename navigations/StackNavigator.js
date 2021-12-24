import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import onedaytrip from "../screens/onedaytrip";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="onedaytrip" component={onedaytrip} />
      </Stack.Group>
      
     
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
