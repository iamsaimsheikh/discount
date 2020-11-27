import { preventAutoHide } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [original, nextOriginal] = React.useState('Original');
  const [discount, nextDiscount] = React.useState('Discount %');


  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
      <Text style={styles.heading}>DISCOUNT</Text>
      </View>
    <View style={styles.txtDiv}>

      <TextInput
      style={styles.txtInput}
      onChangeText={text => nextOriginal(text)}
      value={original}
      keyboardType={'number-pad'}
    />
      <TextInput
      style={styles.txtInput}
      onChangeText={text => nextDiscount(text)}
      value={discount}
      keyboardType={'number-pad'}
      
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  headingView :{
    flex:0.3,
    marginTop:10,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },  

  heading:{
    marginLeft: "auto",
    marginRight:"auto",
    padding:20,
    fontSize:30,
    color:"white"
  },

  txtDiv:{
    flex:0.5,
    alignItems: 'flex-start',
    justifyContent: "flex-end",
    flexDirection:'row'
  },

  txtInput:{
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
    width:150,
    backgroundColor:'white',
    margin:10,
    textAlign:'center'
  }
});
