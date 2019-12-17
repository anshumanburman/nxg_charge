import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/screens/Login';
import * as Constants from '../res/constants';
import Help from '../components/screens/Help';
import AddEv from '../components/screens/AddEv';


const RouteConfig = {
    [Constants.KEY_LOGIN]: Login,
    [Constants.KEY_HELP]: Help,
    [Constants.KEY_ADD_EV]: AddEv

};

const AuthNavigatorconfig = {
    initialRouteName: Constants.KEY_LOGIN,
    header: null,
    headerMode: 'none'
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

const AuthNavigator = createStackNavigator(RouteConfig, AuthNavigatorconfig);
export default AuthNavigator;