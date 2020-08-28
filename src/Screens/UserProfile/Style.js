import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  safeViewStyle: {
    backgroundColor: Colors.White,
  },
  mainStarted: {
    flex: 1,
    backgroundColor: '#f0f1f2',
  },
  notificationWrapperAccordian: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
});
export default styles;
