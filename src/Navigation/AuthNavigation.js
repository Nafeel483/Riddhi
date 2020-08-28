// import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GetStarted from '../Screens/GetStarted';
import PhoneLogin from '../Screens/PhoneLogin';
import VerifyOTP from '../Screens/VerifyOTP';
import SignUp from '../Screens/SignUp';
const AuthStack = createStackNavigator(
  {
    GetStarted: { screen: GetStarted },
    PhoneLogin: { screen: PhoneLogin },
    VerifyOTP: { screen: VerifyOTP },
    SignUp: { screen: SignUp },

  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);

export default AuthStack;
