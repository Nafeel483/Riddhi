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
  SectionStyle1: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f1f2',
    borderWidth: 0.5,
    borderColor: Colors.cancel,
    height: 50,
    borderRadius: 8,
    width: '90%',
  },
  inputSearchIcon1: {
    // padding: 10,
    margin: 15,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    tintColor: Colors.black,
    backgroundColor: '#f0f1f2',
  },
  textInputWrapper: {
    flex: 1,
    marginLeft: 15,
  },
});
export default styles;
