import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Searchbar() {
  return (
    <View style={{marginTop : 15, flexDirection : 'row'}}>
      <GooglePlacesAutocomplete
       placeholder={'Search'}
       styles ={{
           textInput : {
                backgroundColor : '#eee',
                borderRadius : 20,
                fontWeight : '700',
                marginTop : 7
           },
           textInputContainer : {
                backgroundColor : '#eee',
                borderRadius : 50,
                flexDirection : 'row',
                marginRight : 10,
                alignSelf : 'center',

            },
        }}
        renderLeftButton = {()=>(
            <View style ={{marginLeft : 10, marginTop :15, flexDirection : 'row'}}>
                 <Ionicons  name="location-sharp" size={24}  color="black" />
            </View>
  )}
  renderRightButton = {()=>(
      <View
      style ={{
          flexDirection : 'row',
          marginTop : 10,
          marginBottom : 10,
          marginRight : 10,
          backgroundColor : "white", 
          padding : 9,
          borderRadius : 50,
          alignItems : 'center',
      }}
      >
          <AntDesign name="clockcircle" size={11} style={{marginRight : 6}} color="black" />
          <Text>
                Search
            </Text>
      </View>
  )}
       />
    </View>
  )
}