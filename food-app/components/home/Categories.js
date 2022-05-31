import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items =[
    {
    image : require ("../../assets/images/shopping-bag.png"),
    title : 'pick-up'
    },
    {
    image : require ('../../assets/images/bread.png'),
    title : 'bread',
    },
    {
    image : require ('../../assets/images/coffee.png'),
    title : 'coffee',
    },
    {
    image : require ('../../assets/images/deals.png'),
    title : 'deals',
    },
    {
    image : require ('../../assets/images/desserts.png'),
    title : 'desserts',
    },
    {
    image : require ('../../assets/images/fast-food.png'),
    title : 'fast-foods',
    },
    {
    image : require ('../../assets/images/soft-drink.png'),
    title : 'soft-drinks',
    },

]
export default function Categories() {
  return (
    <View style={{ 
      marginTop: 5,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddidingLeft: 10
    }}>

    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {/* loop starts here */}
      {items.map((item, index) => (
        <View key={index} style={{alignItems: 'center', marginRight : 20}}>
      <Image source={item.image} style={{ 
        width : 50,
        height : 40,
        resizeMode : 'contain',
      }} />
      <Text style ={{ 
        fontSize : 13,
        fontWeight : 'bold',
      }}>{item.title}</Text>
      </View>
      ))}
      {/* loop ends here */}
    </ScrollView>
  </View>
  )
}