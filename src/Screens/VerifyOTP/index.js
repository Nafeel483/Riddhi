import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';

class VerifyOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }
  render() {
    return (
      <>
        <View style={styles.mainStarted}>
          <Image source={Images.circle}
            style={{ width: 80, height: 80, marginLeft: -10, marginTop: -16, tintColor: '#FCE0D3' }} />
          <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 30 }}>
            <ImageBackground source={Images.circle} style={{
              width: 35, height: 35, marginLeft: '30%', marginBottom: -18
            }} />
            <Image source={Images.verifyOTP} />
          </View>
          <View style={{ flexDirection: "row", alignSelf: 'center' }}>
            <OTPInputView
              style={styles.OTPInputView}
              pinCount={6}
              // autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={((code) => {
                this.setState({ code });
              })}
            />
          </View>
          <View style={{ width: '80%', alignSelf: 'center', marginTop: 30, marginBottom: 40 }}>
            <Text style={{ color: '#616973', textAlign: 'center' }}>{Constants.OTP_HEADING}</Text>
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
            <Button
              titleName="Verify"
              colorName={Colors.White}
              type="login"
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default VerifyOTP;