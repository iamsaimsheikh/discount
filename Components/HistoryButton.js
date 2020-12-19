import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



export default function HistoryButton({item,onTouchHandler}) {
    return (
        
        <TouchableHighlight onPress={() => onTouchHandler(item.key)}>
            <Text style={styles.item}>{item.originalPrice}          |          {item.discount}          |          {item.discountPrice}</Text>
            </TouchableHighlight>
    )
};

const styles= StyleSheet.create({

    item:{
        padding:16,
        marginTop:10,
        borderColor:'coral',
        color:'white',
        fontWeight:'bold',
        borderWidth:2,
        borderStyle:'dotted',
        borderRadius:10,
        textAlign:"center",
        width:'100%'
    }

});