import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import HomeNavigation from './HomeNavigation';
const AppNavigator = createSwitchNavigator(
  {
    authNavigation: AuthNavigation,
    homeNavigation: HomeNavigation,
  },
  {
    initialRouteName: 'authNavigation',
  },
);
export default createAppContainer(AppNavigator);
