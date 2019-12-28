import {createStackNavigator} from 'react-navigation-stack';
import * as Constant from '../res/constants';
import DrawerNavigator from './drawerNavigator';
// 339744

const RouteConfig = {
    [Constant.KEY_DRAWER] : DrawerNavigator
};
const AuthNavigatorconfig = {
    initialRouteName: Constant.KEY_DRAWER,
    header: null,
    headerMode : 'none'
};

const AppNavigator = createStackNavigator(RouteConfig,AuthNavigatorconfig);
export default AppNavigator;