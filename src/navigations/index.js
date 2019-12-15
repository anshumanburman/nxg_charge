import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigator';
import Splash from '../components/screens/Splash';
import * as Constants from '../res/constants';


const RootNavigator = createSwitchNavigator({
    [Constants.KEY_SPLASH]:Splash,
    [Constants.KEY_AUTH] :AuthNavigator,
    //App: AppNavigator
},{
    initialRouteName: Constants.KEY_SPLASH,
  })

export default createAppContainer(RootNavigator);