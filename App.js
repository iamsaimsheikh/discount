import { preventAutoHide } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useEffect, ReactDOM} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [original, setOriginal] = React.useState('0');
  const [discount, setDiscount] = React.useState('0');
  const [discountRate, setDiscountRate] = React.useState('0');
  var discountPrice='0';



    

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
      <Text style={styles.heading}>DISCOUNT</Text>
      </View>
      
      <View style={styles.discountDiv}>
      <Text nativeID='discountRate' style={{color:'white', fontSize:36}}> {discountRate} </Text>
      </View>  

    <View style={styles.txtDiv}>
      <View style={{justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, color: 'white', paddingLeft: 10 }}>
          Original Price
        </Text>

        <TextInput
        style={styles.txtInput}
        onChangeText={text => {setOriginal(text)
          setDiscountRate((parseInt(original) * parseInt(discount) )/100);
          setDiscountRate((parseInt(original) * parseInt(discount) )/100);
        }}
        value={original}
        keyboardType={'number-pad'}
        />
      </View> 
      <View style={{justifyContent: 'center' }}>
        <Text style={{ fontSize: 15, color: 'white', paddingLeft: 10 }}>
          Discount %
        </Text>

        <TextInput
        style={styles.txtInput}
        onChangeText={text => {setDiscount(text)
           setDiscountRate((parseInt(original) * parseInt(discount) )/100);
           setDiscountRate((parseInt(original) * parseInt(discount) )/100);
        }}
        value={discount}
        keyboardType={'number-pad'}
        />
      </View> 
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
    flex:0.4,
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
  },

  discountDiv:{
    flex:0.1
  }
});
