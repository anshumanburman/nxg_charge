import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/screens/Login';
import * as Constants from '../res/constants';


const RouteConfig = {
    [Constants.KEY_LOGIN] : Login
};

const AuthNavigatorconfig = {
    initialRouteName: Constants.KEY_LOGIN,
    header: null,
    headerMode : 'none'
//    defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: 'blue',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   }
};

const AuthNavigator = createStackNavigator(RouteConfig,AuthNavigatorconfig);
export default AuthNavigator;