import { preventAutoHide } from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useEffect, ReactDOM, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity , Modal, TouchableHighlight, Touchable,FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryButton from './Components/HistoryButton.js'

const finalVal= (val) =>{
  return val;
}


const  HomeScreen= ({route,navigation})=>{

  
  const [original, setOriginal] = React.useState('0');
  const [discountPercent, setDiscount] = React.useState('0');
  const [discountPrice, setDiscountPrice] = React.useState('0');
  const [history,setHistory]=useState([
    
    ]);

  var discountValue=discountPrice;


    const onSaveHandler = () => {
      setHistory(prevHistory => {
        return [
          { originalPrice:original,discount:discountPercent,discountPrice:(original-finalVal(discountPrice)), key: Math.random().toString() },
          ...prevHistory
        ];
      });
      console.log(history)
    }

    React.useEffect(()=>{
      setOriginal(original);
      setDiscount(discountPercent);
      setDiscountPrice(discountPrice);
      discountValue=discountPrice;
    },[discountPrice]);

    

    
  
 
return(
  <View style={styles.container}>

  <View style={styles.headingView}>
  <Text style={styles.heading}>DISCOUNT</Text>
  </View>
  
  <View style={styles.discountDiv}>
    
<Text style={{color:'white', fontSize:36}}> {discountValue} </Text>

  </View>  

<View style={styles.txtDiv}>
  <View style={{justifyContent: 'center' }}>
    <Text style={{ fontSize: 15, color: 'white', paddingLeft: 10 }}>
      Original Price
    </Text>

    <TextInput
    style={styles.txtInput}
    onChangeText={text => {setOriginal(text)
      setDiscountPrice((parseInt(original) * parseInt(discountPercent) )/100);
      setDiscountPrice((parseInt(original) * parseInt(discountPercent) )/100);
    }}
    onChange={() =>{
      setDiscountPrice(discountPrice);
      setOriginal(original);
      setDiscount(discountPercent);
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
    onChange={() =>{
      setDiscountPrice(discountPrice);
      setOriginal(original);
      setDiscount(discountPercent);
    }}
    onChangeText={text => {
      if(parseInt(discountPercent) > 100 || parseInt(discountPercent) < 0){
        setDiscount('0')
      } 
      else{
       setDiscount(text)
       setDiscountPrice((parseInt(original) * parseInt(discountPercent) )/100);
       setDiscountPrice((parseInt(original) * parseInt(discountPercent) )/100);
    }
    }}
    value={discountPercent}
    keyboardType={'number-pad'}
    maxLength={3}
    />
  </View>
</View>

    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',width:320}}>
<View style={{flex:0.1}}>
  <TouchableOpacity style={{width:130,marginLeft:10}} onPress={onSaveHandler}>
    <Text style={{width:130,height:40,color:'white',textAlign:'center',fontSize:26,borderColor:'white',borderWidth:1}}> Save </Text>
    </TouchableOpacity>
  </View>

  <View style={{flex:0.1}}>
  <TouchableOpacity style={{width:130,marginLeft:150}} onPress={ () =>
     navigation.navigate("History",{historyData:history})} 
  >
    <Text style={{width:130,height:40,color:'white',textAlign:'center',fontSize:26,borderColor:'white',borderWidth:1}}> History </Text>
    </TouchableOpacity>
  </View>
  </View>

  
   
</View>

);
    }


const History = ({route, navigation}) => {
 const {historyData} = route.params;
 const [history,setHistory]=useState(historyData);


 

 const onTouchHandler = (key) =>{
  setHistory((prevHistory)=>{
    return  prevHistory.filter(history => history.key != key)
  })
}
  
const deleteHistory = () =>{
  setHistory('0')
  console.log(history);
  navigation.navigate('HomeScreen',{history:history})
}



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={deleteHistory}>
      <Text style={{marginTop:150,color:'white'}}>Clear History</Text>
      </TouchableOpacity>
      
      <Text style={{color:'white',marginTop:50}}>Original     |     Discount%     |   Disc Price</Text>
      
      <View style={styles.list}>
       <FlatList
        data={history}
        renderItem={({item})=>(
        <HistoryButton item={item} onTouchHandler={onTouchHandler} />
        )}
        />
        
        </View>
      
      </View>
  )

}







  const Stack = createStackNavigator();

 export default function App() {

  

    

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
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
    flex:0.1,
    alignItems:'flex-end',
    justifyContent:'flex-end',

  },  

  heading:{
    marginLeft: "auto",
    marginRight:"auto",
    padding:20,
    paddingRight:10,
    fontSize:30,
    color:"white"
  },

  txtDiv:{
    flex:0.2,
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
    flex:0.1,
  },
  list:{
    marginTop:20,
    color:'black',
  }

  

});
