import { View, Text,TouchableOpacity,Modal, StyleSheet} from 'react-native'
import { doc, setDoc, addDoc, serverTimestamp, collection } from "firebase/firestore"; 
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from "./OrderItem";
import { db } from '../../lib/init-firebase'
import LottieView from 'lottie-react-native';


export default function ViewCart({ navigation }) {

  const [loading, setLoading] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);

    const {items, categoryName} = useSelector((state)=>state.cartReducer.selectedItems);
    const total = items.map(item =>Number(item.price.replace('Dhs', ''))).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = total.toLocaleString('en-US',{
        style: "currency",
        currency: "MAD"
    })

const addOrderToFireBase = async () =>  {

  setLoading(true);
  
  await addDoc(collection(db, "Orders"), {

        items: items,
        categoryName: categoryName,
        createdAt: serverTimestamp(),
    }).then(()=>{
        setTimeout(() => {
          setLoading(false)
          setModalVisible(false)
          navigation.navigate('OrderCompleted');

        },2000)
    })
              
          //     setModalVisible(false);
          // navigation.navigate("OrderCompleted");
};


     const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.categoryName}>{categoryName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalPrice}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalPrice : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };


          const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });


  return (
      <>
      <Modal 
      animationType = "slide"
        transparent = {true}
        visible = {modalVisible}
        onRequestClose = {()=>{
            setModalVisible(false)
        }}
       >
           {checkoutModalContent()}
           </Modal >
      {total !== 0 ? (
    <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 220,
            zIndex: 999,

    }}>
        <View style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
        }}>
    <TouchableOpacity
    style={{ 
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",

    }}
    onPress={() => setModalVisible(true)}
    >
      <Text style={{color : 'white', fontSize :20, marginRight: 30}}>ViewCart</Text>
        <Text style={{color : 'white', fontSize :20}}>{totalPrice} Dhs</Text>
    </TouchableOpacity>
        </View>
    </View>
    ): (<></>
    )}
    {
        loading ? (
          <View style={{backgroundColor:'black',
          position:'absolute',
          opacity:0.8,
          alignItems:'center',
          justifyContent:'center',
          width:'100%',
          height:'100%',
          flex:1,
          }}>
            <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
            />
          </View>

        ): (<></>)
    }
    </>
  )
}