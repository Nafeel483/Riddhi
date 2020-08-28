import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';
import images from '../../Styles/Images';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <View style={styles.mainStarted}>
          <View style={styles.logoContinnerWrapper}>
            <Image source={Images.signUpLogo} />
          </View>
          <Image source={Images.specular} style={styles.specular} />
          <ImageBackground source={Images.dotlogo}
            style={styles.imageLogoBackground} />
          <View style={styles.signUpWrapper}>
            <Text style={styles.signUpText}>{Constants.SIGN_UP}</Text>
          </View>
          <View style={{ width: '80%', alignSelf: 'center', marginTop: 30, marginBottom: 40 }}>
            <Text style={{ color: '#46454B', textAlign: 'center' }}>{Constants.SIGN_UP_HEADING}</Text>
          </View>
          <View style={styles.facebookButton}>
            <Image source={Images.Facebook} />
          </View>
          <View style={styles.seperatorContainer}>
            <View style={styles.seperatorWrapper} />
            <Text style={styles.textContainer}>{Constants.OR}</Text>
            <View style={styles.textwrapper} />
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('main') }}>
            <View style={styles.googleButton}>
              <Image source={Images.Google} />
            </View>
          </TouchableOpacity>
          <Image source={Images.circle}
            style={{ width: 60, height: 60, marginLeft: -30, marginTop: -16, tintColor: '#FFDC60' }} />
        </View>
      </>
    );
  }
}
export default SignUp;