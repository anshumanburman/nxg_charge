import React from 'react';
import { View,ImageBackground,Text, StyleSheet,TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'yellow'}}>
        {/* <ImageBackground style={{ flex: 1, backgroundColor: 'green',margin:0 }} source={require('../../../assets/images/home.png')}></ImageBackground> */}
        <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
     <TouchableOpacity style={{position:'absolute',top:30,right:10}} onPress={()=>navigation.openDrawer()}><Text>click</Text></TouchableOpacity>
   </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    //   height: 400,
    //   width: 400,
    flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default Home;