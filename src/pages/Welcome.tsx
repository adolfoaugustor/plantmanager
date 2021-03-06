import React from 'react';
import {
   SafeAreaView,
   Text,
   Image, 
   TouchableOpacity,
   StyleSheet,
   Dimensions
} from 'react-native';

import weteringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
         </Text>

         <Image 
            source={weteringImg} 
            style={styles.image}
            resizeMode="contain"
         />
         
         <Text style={styles.subtitle}>
            Não esqueça maias de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
         </Text>
         
         <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
         >
            <Text style={styles.buttonText}>
               >
            </Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'space-around'
   },
   title: {
      fontSize:32,
      fontWeight:'bold',
      textAlign: 'center',
      color:colors.heading,
      marginTop:50
   },
   subtitle: {
      textAlign: 'center',
      fontSize:18,
      paddingHorizontal:20,
      color:colors.heading
   },
   image: {
      height: Dimensions.get('window').width * 0.7
   },
   button: {
      backgroundColor: colors.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      marginBottom: 30,
      height: 55,
      width:55
   },
   buttonText: {
      color:colors.white,
      fontSize:24
   }
});