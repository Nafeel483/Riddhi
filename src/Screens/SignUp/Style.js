import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  logoContinnerWrapper: {
    marginTop: hp('7%'),
    alignSelf: 'center'

  },
  logoContinner: {
    flexDirection: 'row',
  },
  mainStarted: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  specular: {
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  imageLogoBackground: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    marginTop: hp('-4%'),
    marginLeft: wp('17%')
  },
  signUpWrapper: {
    marginTop: hp('3%'),
    alignSelf: 'center'
  },
  signUpText: {
    fontSize: 22,
    fontWeight: "800",
    color: '#18171E'
  },
  seperatorContainer: {
    marginTop: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: widthScreen / 20,
  },
  facebookButton: {
    alignSelf: "center",
    marginTop: hp('5%')
  },
  seperatorWrapper: {
    flex: 1,
    height: 2,
    backgroundColor: '#D8DADC',
  },
  textContainer: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#3A4450',
    fontWeight: '700',
  },
  textwrapper: {
    flex: 1,
    height: 2,
    backgroundColor: '#D8DADC',
  },
  googleButton: {
    marginTop: hp('3%'),
    alignSelf: "center"
  }
});
export default styles;
