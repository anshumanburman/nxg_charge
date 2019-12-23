/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import Navigator from './src/navigations';
import configureStore from './src/ConfigureStore';
import {Provider} from 'react-redux';





enableScreens();


const store = configureStore();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
      <Navigator />
      </Provider>
    </>

  )
}
// {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={{flex:1}}>
//         {/* <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//             <View style={styles.container}>
//             <Text>Hiii</Text>
//             </View>
//         </ScrollView> */}
//         <AppContainer />
//       </SafeAreaView>
//     </>
//   );
// };

export default App;
