import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View,} from "react-native";
import {TextInput} from 'react-native';
import Button from '../components/button'


const onedaytrip = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
   <View style={styles.inputContainer}>
     <Text
     style={styles.text}>Customer Name :</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Customer Name"
      maxLength={20}
    />
    <Text
     style={styles.text}>Mobile Number :</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Mobile Number"
      maxLength={20}
    />
    
    <Text
     style={styles.text}>Initial Payment :</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Initial Payment"
      maxLength={20}
    />
     <Text
     style={styles.text}>Distance Travelled :</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Distance Travelled"
      maxLength={20}
    />
  </View>
 
    <Button label='submit' onPress={() => true} />
      </SafeAreaView>
  );
};

export default onedaytrip;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
     marginBottom: 5,
  },
  textInput: {
    borderColor: '#ffc107',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginBottom: 10,
    height: 40,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#212529',
    backgroundColor: '#212529',
    padding: 10,
    margin: 5,
    marginRight: 120,
    marginLeft: 120,
    borderRadius: 5,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});
