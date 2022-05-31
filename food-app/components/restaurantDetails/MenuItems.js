import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../lib/init-firebase'
import { LogBox } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux'

LogBox.ignoreLogs(['Setting a timer']);



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin : 20
    },
})



export default function MenuItems(
    {
        categoryName,
        hideCheckbox,
        Drinks,
        
    }) 
    {

    
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item, 
        categoryName : categoryName,
        checkboxValue : checkboxValue
      },
    });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
        );

    const isFoodItemInCart = (Drink,cartItems) => (
        Boolean(cartItems.find((item)=> item.name === Drink.name))
    );



    // console.log(Drinks)

  return (
    <ScrollView verticalScroll >
        {Drinks.map((Drink, index)=>(
            
            <View key={index} >

            <View  style={styles.menuItemStyle } >
               { hideCheckbox ?  (<></>) : (<BouncyCheckbox
                 iconStyle={{borderColor : 'lightgray',
                  borderRadius : 8,
                  borderWidth : 1,
                  }}
                  fillColor = 'gray'
                  onPress={(checkboxValue) => selectItem(Drink, checkboxValue   )}
                  isChecked={isFoodItemInCart(Drink, cartItems)}
                  />)
                }
                <DrinksInfo Drink={Drink} />
                <DrinksImage Drink={Drink} />
            </View>
                <Divider width={0.5} orientation = "vertical" style={{marginHorizontal: 20}}/>
            </View>))}
            
    </ScrollView>
  )
}

const DrinksInfo = (props)=> {
    return (
        <View style ={{ width : 200, justifyContent : 'space-evenly'}} >
                    <Text style={{fontWeight: 'bold', fontSize:15}} >{props.Drink.name}</Text>
                    <Text style={{ fontSize: 13}}>prix : {props.Drink.price}</Text>
                    <Text style={{ fontSize: 13}}  >reviews : {props.Drink.reviews}</Text>
                    <Text style={{ fontSize: 13}}  >rating : {props.Drink.rating}</Text>
            
        </View>
    )
}

const DrinksImage = (props)=> {
    return (
        <View>
            <Image  source={{uri: props.Drink.image}} style={{width: 80, height: 80 ,borderRadius: 8}}/>
        </View>
    )
}
