/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import {createAppContainer,SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './src/components/screens/Splash';
import Login from './src/components/screens/Login';




enableScreens();

const AppNavigator = createStackNavigator({
  splash : {
    screen : Splash,
    navigationOptions :{
      header:null
    }
  },
  lgn : {
    screen : Login,
    navigationOptions :{
      header:null
    }
  }
},
{
  initialRouteName: 'splash',
});
const AppContainer = createAppContainer(AppNavigator);

const App=() => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.container}>
            <Text>Hiii</Text>
            </View>
        </ScrollView> */}
        <AppContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
