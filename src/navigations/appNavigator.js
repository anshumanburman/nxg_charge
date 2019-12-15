import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/screens/Login';
import Splash from '../components/screens/Splash';

// 339744

const RouteConfig = {
    login1 : Login
};
const AuthNavigatorconfig = {
    initialRouteName: 'login1',
    header: null,
    headerMode : 'none'
};

const AppNavigator = createStackNavigator(RouteConfig,AuthNavigatorconfig);
export default AppNavigator;