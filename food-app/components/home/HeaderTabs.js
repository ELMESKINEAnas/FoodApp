import { View, Text, SafeAreaView, TouchableOpacity, Platform, StatusBar} from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <SafeAreaView style={{flexDirection : "row", alignSelf : "center"}}>
      <HeaderButton
        text="Delivery"
        backgroundColor='black'
        activeTab = {activeTab}
        setActiveTab={setActiveTab}
        textColor="white"
        />
        <HeaderButton 
        text="Pickup" 
        textColor="black"
        backgroundColor="white"
        activeTab = {activeTab}
        setActiveTab={setActiveTab}
        />
    </SafeAreaView>

  )
}

const HeaderButton =(props)=>{
    return (

            <TouchableOpacity style = {{
                            backgroundColor : props.activeTab == props.text ? 'black' : 'white',
                            paddingHorizontal : 16,
                            paddingVertical : 6,
                            borderRadius : 30}} 
                            onPress={()=>{ props.setActiveTab(props.text)}}
            >

        <Text style ={{
            color : props.activeTab == props.text ? 'white' : 'black',
            fontSize : 16,
            fontWeight : 'bold',
            }}>
            
            {props.text}
            </Text>
            </TouchableOpacity>
    
    )
    }