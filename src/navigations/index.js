import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigator';
import Splash from '../components/screens/Splash';
import * as Constants from '../res/constants';
import DrawerNavigator from './drawerNavigator';


const RootNavigator = createSwitchNavigator({
    [Constants.KEY_SPLASH]:Splash,
    [Constants.KEY_AUTH] :AuthNavigator,
    [Constants.KEY_APP]: AppNavigator
},{
    initialRouteName: Constants.KEY_SPLASH,
  })

export default createAppContainer(RootNavigator);