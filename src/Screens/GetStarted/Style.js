import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainStarted: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
export default styles;
