import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


export const categories = [
    {
        name : 'Drinks',
        image : 'https://www.lovecasa.com.au/wp-content/uploads/2022/02/casa-drinks-menu.jpg',
        reviews : 367,
        rating : 4.5,
        description : 'Menu is for informational purposes only. Menu items and prices are subject to change without prior notice.'
    },
    {
        name : 'Burgers',
        image : 'https://lamaisonduburger.com/wp-content/uploads/2021/05/menu-burger-jumbo.jpg',
        reviews : 2156,
        rating : 4.9,
        description : 'Menu is for informational purposes only. Menu items and prices are subject to change without prior notice.'
    },
        {
        name : 'Salads',
        image : 'https://i.ytimg.com/vi/IsWkPIz45Sk/maxresdefault.jpg',
        reviews : 9807,
        rating : 4.3,
        description : 'Menu is for informational purposes only. Menu items and prices are subject to change without prior notice.'
    },
    {
        name : 'Desserts',
        image : 'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg',
        reviews : 1296,
        rating : 5,
        description : 'Menu is for informational purposes only. Menu items and prices are subject to change without prior notice.'
    },
]

export default function RestaurantItem({navigation, ...props}) {
  return (
      <>
        {props.categoriesData.map((cat, index) => (
            <TouchableOpacity 
            key={index} 
            activeOpacity={1} 
            style = {{marginBottom:15}}
            onPress={()=>{ 

                navigation.navigate('RestaurantDetails',{
                    name : cat.name,
                    image : cat.image,
                    reviews : cat.reviews,
                    rating : cat.rating,
                    description : cat.description,
                })
            }
        }
            >
            <View  style={{ 
                marginTop : 10,
                padding : 15,
                backgroundColor : 'white',
                }}>
            <RestaurantImage image = {cat.image} />
            <RestaurantInfo rating={cat.rating} name={cat.name} reviews={cat.reviews} />
            </View>
            </TouchableOpacity>
            ))}
    </>
  )
}

const RestaurantImage =(props)=>(
    <>
    <Image
        source={{
            uri : props.image
        }}
        style={{
            width : '100%',
            height : 180,
        }}
        
        />
        <TouchableOpacity style={{
            position : 'absolute',
            top : 20,
            right : 20,
        }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
            </TouchableOpacity>
            
    </>
)

const RestaurantInfo = (props)=>(
    <View style={{
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 10,
        alignItems : 'center',
    }}>
        <View>
            <Text
             style={{
                fontSize : 15,
                fontWeight : 'bold',
            }}>
                {props.name}
                </Text>
                <Text style={{
                    fontSize : 12,
                    color : '#999',
                }}>
                    {props.reviews} reviews
                </Text>

        </View>
        <View style={{
            backgroundColor : '#eee',
            height : 30,
            width : 50,
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'center',
            borderRadius : 50,
        }}>

        <Text >
            {props.rating}
            <MaterialCommunityIcons name="star" size={15} color="orange" />
        </Text>
        </View>
     
    </View>
)