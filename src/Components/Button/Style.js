import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const styles = StyleSheet.create({
  buttonContainerRow: {
    alignItems: 'center',
    width: wp(40),
    margin: 10,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.cancel,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '90%',
    marginLeft: 20,
    margin: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    fontSize: 16,
    fontWeight:'600',
    padding: 10,
  },
  facebookAndGoogle: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  linkdin: {
    width: 22,
    height: 30,
    marginRight: 5,
  },
});
export default styles;
