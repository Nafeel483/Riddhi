import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainStarted: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  OTPInputView: {
    width: '80%',
    height: heightScreen / 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  underlineStyleBase: {
    color: '#18171E',
    fontSize: 20,
    backgroundColor: 'white',
    width: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 12
  },

  underlineStyleHighLighted: {
    borderColor: "red",
  },
});
export default styles;
