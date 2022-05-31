import React from 'react'
import { View, SafeAreaView, Platform, StatusBar, ScrollView } from 'react-native'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem, { categories } from '../components/home/RestaurantItem'
import Searchbar from '../components/home/Searchbar'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import {useState} from 'react'
import Categories from '../components/home/Categories'



export default function Home({navigation}) {
    const [categoriesData, setCategoriesData] = useState(categories)

  return (


    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, backgroundColor : '#eee', flex : 1}} >
        <View style = {{backgroundColor : "white", padding : 15 }} >
            <HeaderTabs />
            <Searchbar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories/>
            <RestaurantItem categoriesData = {categoriesData} navigation={navigation} />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
    </SafeAreaView>
  )
}