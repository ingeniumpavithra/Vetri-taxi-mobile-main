import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, View, Button, Image } from "react-native";

const Separator = () => (
  <View style={styles.separator} />
);


const Home = () => {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}>
         <Button
        onPress={() => navigation.navigate("Login")}
        title="Log in"
       color="hotpink" 
       /> 
       <Separator />
       <Button
        onPress={() => navigation.navigate("onedaytrip")}
        title="One Day Trip"
        color="#2196F3" 
       />  
   <Separator />

   <Button
        onPress={() => navigation.navigate("onedaytrip")}
        title="Normal Taxi"
       color="#2196F3" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("onedaytrip")}
        title="Local Trip"
       color="#2196F3" 
       />  
   <Separator />
   <Button
        onPress={() => navigation.navigate("onedaytrip")}
        title="Hills Trip"
       color="#2196F3" 
       />  
   <Separator />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    
  },
});
