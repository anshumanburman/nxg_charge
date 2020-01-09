import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import * as Style from '../../styles';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';
import hasLocationPermission from '../../services/LocationPermission';

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO



const Home = ({ navigation }) => {
const [region, setregion] = useState({
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
})

  useEffect(()=>{

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
          (position) => {
              console.log(position);
              let lat = parseFloat(position.coords.latitude)
              let long = parseFloat(position.coords.longitude)
              let currentLoc = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
              setregion(currentLoc)
          },
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message," error");
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
  }
  },[])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} forceInset={{ bottom: 'never' }}>
      {/* <ImageBackground style={{ flex: 1, backgroundColor: 'green',margin:0 }} source={require('../../../assets/images/home.png')}></ImageBackground> */}
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', height: 44 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={require('../../../assets/images/menu.png')} />
        </TouchableOpacity>
        <Text style={[Style.Typography.FONT_MEDIUM, { color: Style.Colors.GREEN_COLOR, fontSize: 14, marginLeft: '30%' }]}>NXG Charge</Text>
      </View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={region}
          showsUserLocation={true}
        >
        </MapView>
        
        <View style={{ position: 'absolute', top: 30, right: 10 }}>
          <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', margin: 5, ...Style.Mixins.boxShadow('black') }} onPress={() => navigation.openDrawer()}></TouchableOpacity>
          <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', margin: 5, ...Style.Mixins.boxShadow('black') }} onPress={() => navigation.openDrawer()}></TouchableOpacity>
          <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', margin: 5, ...Style.Mixins.boxShadow('black') }} onPress={() => navigation.openDrawer()}></TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor:'white',padding:15,height:120,alignItems:'center',flexDirection:'row' }}>
<CommonTextInput txtStyle={{flex:1}} placeholder={'Search'}/>
<CustomButton btnStyle={{width:45,height:45}} image={require('../../../assets/images/left_arrow.png')}/>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    //...StyleSheet.absoluteFillObject,
    //   height: 400,
    //   width: 400,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Home;