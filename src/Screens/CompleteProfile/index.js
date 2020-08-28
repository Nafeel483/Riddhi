import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput
} from 'react-native';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button';

class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: ""

    };
  }
  _onChangeText = (text) => {
    this.setState({ situation: text });
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Complete Profile'
            navigation={this.props.navigation}
            screen='Profile'
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '100%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 30 }}>
                <ImageBackground source={Images.circle} style={{
                  width: 40, height: 40, marginLeft: '40%', marginBottom: -25
                }} />
                <Image source={Images.FillProfile} style={{ width: 180, height: 25, }} />
              </View>
              <View style={{ width: '80%', alignSelf: "center" }}>
                <Text style={{ color: '#616973', fontSize: 14, fontWeight: 'normal' }}>Complete your profile to gain more visibility in your network & opportunity to be influential</Text>
              </View>
              <View style={{
                marginTop: 20, width: '90%', alignSelf: 'center', borderWidth: 0.5,
                marginBottom: 20, borderRadius: 12, backgroundColor: '#fcf7f5', borderColor: '#fcf7f5'
              }}>
                <View style={{ margin: 15, flexDirection: 'row' }}>
                  <Image style={{ width: 60, height: 60, borderRadius: 12, borderWidth: 0.5, borderColor: 'white' }}
                    source={{
                      uri: 'https://s3-alpha-sig.figma.com/img/fcb9/c4e1/1586d13d375024758be2f0c32f232bc1?Expires=1598227200&Signature=BqgwVjqviRCDGpiUeA-aInzCQ0S4ayc9ebRgMk-SNmQ67XsFctej4SeVR6OAoxLzcnCqJUY6dAAtd0-cpNzl74SAbPeECrKbdGeUARHmypdPMaOR5XY35RYF4TZki6a972tMtmjmcaApT7yhdehGaukdxl5vbvEoSqSockuDX9FfwfnBvOh6YD~JYwuYRyXm9FOEPkzeWOC2TbkZUyZIkMZRfzb5OWe5dL9~7TZAbPGqGf3QBoEVMC7jBb3nvlXxU8aRn52WWS1EAg0jqcCqCzo~Mqtd39HsaT9~4HGWK-nvwERw7nGuU-rxa3ijpBabPnLB-HHgcuT8MEuFhKJaMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                    }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '500' }}>Upload Profile Picture</Text>
                    <Image source={Images.uploadButton} style={{
                      width: 120, height: 25,
                      marginTop: 10, borderRadius: 8, borderWidth: 0.5, borderColor: '#FCE0D3'
                    }} />
                  </View>
                </View>
              </View>
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22 }}>Designation</Text>
              <View style={{
                borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
                width: '90%', alignSelf: 'center', marginBottom: 15
              }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    // width: "90%",
                    height: 80,
                    padding: 10,
                    margin: 5,


                  }}
                  multiline={true}
                  maxLength={70}
                  numberOfLines={4}
                  placeholder="Complete your profile to gain more visibility in your network & opportunity to......."
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Company Name */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22 }}>Company Name</Text>
              <View style={{
                borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
                width: '90%', alignSelf: 'center', marginBottom: 15
              }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    // width: "90%",
                    height: 40,
                    padding: 10,
                    margin: 5,


                  }}
                  placeholder="Jain company"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Education */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22 }}>Education</Text>
              <View style={{
                borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
                width: '90%', alignSelf: 'center', marginBottom: 15
              }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    // width: "90%",
                    height: 40,
                    padding: 10,
                    margin: 5,


                  }}
                  placeholder="BBA"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Name of Institution */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22 }}>Name of Institution</Text>
              <View style={{
                borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
                width: '90%', alignSelf: 'center', marginBottom: 15
              }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    // width: "90%",
                    height: 40,
                    padding: 10,
                    margin: 5,


                  }}
                  placeholder="02"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Current Location */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22 }}>Current Location</Text>
              <View style={{
                borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
                width: '90%', alignSelf: 'center', marginBottom: 15
              }}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    // width: "90%",
                    height: 40,
                    padding: 10,
                    margin: 5,


                  }}
                  placeholder="Bd 23/0 India"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              <View style={{ marginTop: 20, marginBottom: 20 }}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
                  <Button
                    titleName="Submit"
                    colorName={Colors.White}
                    type="login"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default CompleteProfile;