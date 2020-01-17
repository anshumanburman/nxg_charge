import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Style from '../../styles';
import { SafeAreaView } from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import { WebView } from 'react-native-webview';





const Settings = ({navigation}) => {
    const [title,setTitle] = useState('')
        useEffect(()=>{
        console.log("navigation setting:::: ",navigation);
        setTitle(navigation.state.params.title)
        
    })
    return (
        <>
         <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <CommonHeader headerTitle={title} onPress={() => navigation.goBack()} />
            <WebView
          originWhitelist={['*']}
          source={ require('../../../public/PrivacyPolicy.html') }
          style={{flex:1}}
        />
            </View>
            </SafeAreaView>
        </>

    );

}
const styles = StyleSheet.create({
    container  : {
        flex: 1,
        backgroundColor:'white'
    },
    email: {
        marginTop: 20
    },
    signUp: {
        width: Style.Mixins.scaleSize(135),
        alignSelf: 'flex-end'
    }



})

export default Settings;