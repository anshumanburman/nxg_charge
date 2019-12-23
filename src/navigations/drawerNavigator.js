import {createDrawerNavigator} from 'react-navigation-drawer';
import * as Style from '../styles';
import Home from '../components/screens/Home';
import CustomDrawer from '../components/screens/CustomDrawer';






const DrawerNavigator = createDrawerNavigator({
    [Style.Constants.KEY_HOME]: Home
}, {
    initialRouteName: Style.Constants.KEY_HOME,
    contentComponent: CustomDrawer
})


export default DrawerNavigator;