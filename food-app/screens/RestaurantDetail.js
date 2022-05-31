import { View, Text, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'
import { Docs,getDocs,collection,querySnapshot } from 'firebase/firestore'
import { db } from '../lib/init-firebase'


export default function RestaurantDetails({route, navigation}) {
  const [Drinks, setDrinks] = useState([])
  
  useEffect(()=>{
  const list = []
  const fetchData = async ()=>{
      const querySnapshot = await getDocs(collection(db, "Drinks"));
          querySnapshot.forEach((doc) => {
          list.push({id : doc.id, ...doc.data()})
      });
      setDrinks(list)
      // console.log(list)
  }
  fetchData()
  }, [])
    // console.log(route.params);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={1.8}
            style={{
                marginVertical: 20,
            }}
        />
        <MenuItems categoryName = {route.params.name} Drinks={Drinks} />
        <ViewCart navigation={navigation}  />
    </ScrollView>
  )
}

