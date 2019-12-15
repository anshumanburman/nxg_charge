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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';


import Navigator from './src/navigations';


enableScreens();



const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
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
