import React from 'react';
import { View,ImageBackground,Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';


const Home = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'yellow'}}>
        <ImageBackground style={{ flex: 1, backgroundColor: 'green',margin:0 }} source={require('../../../assets/images/home.png')}></ImageBackground>
        </SafeAreaView>
    );
}

export default Home;