import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Style from '../../styles';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';



const Home = ({ navigation }) => {
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
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
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