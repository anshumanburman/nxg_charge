import React, { useState } from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
import {SafeAreaView} from 'react-navigation';
import CommonHeader from './CommonHeader';
//import Privacy from '../../../public/PrivacyPolicy.html';
const htmlFile = require('../../../public/PrivacyPolicy.html');
const CommonWebView =(props)=> {
  const {isVisible, dismiss,title} = props
  //const [isVisible, setIsVisible] = useState(isVisi)
      return (
        
                
          <Modal
          visible={isVisible}
          transparent={true}

          >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <CommonHeader headerTitle={title} onPress={()=>dismiss(false)} />
              <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          source={ htmlFile }
          style={{flex:1}}
        />
        
        </View>
        </SafeAreaView>
        </Modal>
        
      );
  }
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'red'
    }
})
  export default CommonWebView;