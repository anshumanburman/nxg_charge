import {createDrawerNavigator} from 'react-navigation-drawer';
import * as Style from '../styles';
import Home from '../components/screens/Home';
import CustomDrawer from '../components/screens/CustomDrawer';
import ChargingStation from '../components/screens/ChargingStation';
import Offers from '../components/screens/Offers';






const DrawerNavigator = createDrawerNavigator({
    [Style.Constants.KEY_HOME]: Home,
    [Style.Constants.KEY_CHARGING_STATIONS]: ChargingStation,
    [Style.Constants.KEY_OFFERS] : Offers,
}, {
    initialRouteName: Style.Constants.KEY_HOME,
    contentComponent: CustomDrawer
})


export default DrawerNavigator;