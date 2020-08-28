import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  modelMainConatinerAddCar: {
    // flex: 1,
    backgroundColor: 'rgba(255,255,255,0)',
    height: '50%',
    width: "100%",
    marginLeft: -1,
    marginTop: -5,
    opacity: 0.6
  },
  modelContainer: {
    width: '100%',
    // height: 200,
    backgroundColor: 'white',
    borderRadius: 40,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },
  crossAlert: {
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: 'white',
    marginTop: 10,
    width: 50,
    height: 7,
    alignSelf: 'center'
  },
});
export default styles;
