import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <View style={styles.mainStarted}>
          <ImageBackground source={Images.getStartedCircle} style={{
            marginRight: -45,
            opacity: 40,
            width: 80, height: 110, alignSelf: 'flex-end',
          }} />
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.83 }}>
            <Image source={Images.logoMain} style={{ alignSelf: 'center', }} />
            <Image source={Images.dots} style={{ alignSelf: 'center', marginTop: 30 }} />
            <View style={{ alignSelf: 'center', marginTop: 30 }}>
              <ImageBackground source={Images.circle} style={{
                width: 30, height: 30, marginLeft: 72, marginBottom: -18
              }} />
              <Image source={Images.welcome} />
            </View>
            <View style={{ width: '80%', alignSelf: 'center', marginTop: 30 }}>
              <Text style={{ color: '#616973', textAlign: 'center' }}>{Constants.GET_STARTED_HEADING}</Text>
            </View>
            <ImageBackground source={Images.leftStarted} style={{
              width: 60, height: 110, alignSelf: 'flex-start', marginTop: 50, marginLeft: -20
            }} />
          </View>
          <View style={{ width: '95%', alignSelf: 'center', marginTop: -40 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('PhoneLogin') }}>
              <Button
                titleName="Get Started"
                colorName={Colors.White}
                type="login"
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
export default GetStarted;