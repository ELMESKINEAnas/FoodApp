import { View, Text, Image } from 'react-native'
import React from 'react'


const aboutInfo = {
    image : 'https://www.lovecasa.com.au/wp-content/uploads/2022/02/casa-drinks-menu.jpg',
    name :  'Prix de vente des plats d\'un restaurant',
    description : 'Prix de vente des plats d\'un restaurant'
}



// const formatedCategories = description.map((category) => cat.name).join(' ¨')

// const descrip = `${formatedCategories}`


export default function About(props) {
    // console.log(props.name);

// console.log(props.route.params.name);
    const { image, name, description } = props.route.params;
    // console.log(props.route.params.name);

  return (
    <View>
      <RestaurantImage image={image}/>
        <RestaurantTitle name={name} />
        <RestaurantInfo description={description} />
    </View>
  )
}



const RestaurantImage = (props) =>(
    <Image source={{ 
        uri : props.image
    }}
    style = {{ 
        width : '100%',
        height : 180,
    }}
    />
)

const RestaurantTitle = (props) =>(
    <Text style={{
        fontSize : 20,
        fontWeight : 'bold',
        marginHorizontal : 15,
        marginTop : 10,
    }}>
        {props.name}
    </Text>

)

const RestaurantInfo = (props)=>(
    <Text style={{
        fontSize : 15,
        marginHorizontal : 15,
        marginTop : 10,
        fontWeight : '400'
    }}>
        {props.description}
    </Text>
)