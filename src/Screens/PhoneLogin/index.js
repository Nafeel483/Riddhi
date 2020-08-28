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

class PhoneLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneInput: '',
      countryCode: ''
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
              width: 30, height: 30, marginLeft: '60%', marginBottom: -18
            }} />
            <Image source={Images.enterNumber} />
          </View>
          <View style={{ flexDirection: "row", alignSelf: 'center' }}>
            <TextInput keyboardType={'phone-pad'}
              placeholder='+91'
              placeholderTextColor='#18171E'
              style={{
                fontSize: 15, fontWeight: '700',
                borderWidth: 0.3, margin: 10, padding: 18, borderRadius: 12,
                height: 65, borderColor: '#D8DADC'
              }}
              onChangeText={(value) => this.setState({ countryCode: value })}
            />
            <TextInput keyboardType={'phone-pad'}
              placeholder='2340 - 324 000'
              placeholderTextColor='#B0B4B9'
              style={{
                fontSize: 15, fontWeight: '700',
                borderWidth: 0.3, margin: 10, padding: 18, borderRadius: 12,
                height: 65, borderColor: '#D8DADC', width: '60%'
              }}
              onChangeText={(value) => this.setState({ phoneInput: value })}
            />
          </View>
          <View style={{ width: '80%', alignSelf: 'center', marginTop: 30, marginBottom: 40 }}>
            <Text style={{ color: '#616973', textAlign: 'center' }}>{Constants.PHONE_LOGIN_HEADING}</Text>
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('VerifyOTP') }}>
            <Button
              titleName="Next"
              colorName={Colors.White}
              type="login"
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default PhoneLogin;