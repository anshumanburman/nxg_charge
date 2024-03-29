import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import * as Style from '../styles';
import Home from '../components/screens/Home';
import CustomDrawer from '../components/screens/CustomDrawer';
import ChargingStation from '../components/screens/ChargingStation';
import Offers from '../components/screens/Offers';
import ChargingStationDetails from '../components/screens/ChargingStationDetails';
import ChangePassword from '../components/screens/ChangePassword';
import Help from '../components/screens/Help';
import Settings from '../components/screens/Settings';



// const StationNavigator = createStackNavigator({
//     [Style.Constants.KEY_CHARGING_STATIONS]: ChargingStation,
//     //[Style.Constants.KEY_CHARGING_STATION_DETAILS] : ChargingStationDetails
// },{
//     initialRouteName: Style.Constants.KEY_CHARGING_STATIONS,
//     header: null,
//     headerMode : 'none'
// });


const DrawerNavigator = createDrawerNavigator({
    [Style.Constants.KEY_HOME]: Home,
    [Style.Constants.KEY_CHARGING_STATIONS]: ChargingStation,
    //station : StationNavigator,
    [Style.Constants.KEY_OFFERS] : Offers,
    [Style.Constants.KEY_CHANGE_PASSWORD] : ChangePassword,
    [Style.Constants.KEY_HELP] : Help,
    [Style.Constants.KEY_SETTINGS] : Settings,
}, {
    initialRouteName: Style.Constants.KEY_HOME,
    contentComponent: CustomDrawer,
    lazy:false
})


export default DrawerNavigator;