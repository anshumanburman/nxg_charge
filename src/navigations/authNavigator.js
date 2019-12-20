import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/screens/Login';
import * as Constants from '../res/constants';
import Help from '../components/screens/Help';
import AddEv from '../components/screens/AddEv';
import VikhroliEast from '../components/screens/VIkhroliEast';
import Filter from '../components/screens/Filter';

import {View} from 'react-native';



const RouteConfig = {
    [Constants.KEY_LOGIN]: Login,
    [Constants.KEY_HELP]: Help,
    [Constants.KEY_ADD_EV]: AddEv,
    [Constants.KEY_VIKHROLI_EAST]: VikhroliEast,
    [Constants.KEY_FILTER]: Filter,


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