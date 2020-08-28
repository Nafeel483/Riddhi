import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './Style';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../Components/Button';
class UpdateScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isChecked: false,

    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Check Credit Score'
            navigation={this.props.navigation}
            screen='main'
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '100%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 30 }}>
                <ImageBackground source={Images.circle} style={{
                  width: 33, height: 33, marginLeft: '57%', marginBottom: -22
                }} />
                <Image source={Images.Enter_Your_Phone_Num} style={{ width: 240, height: 18, }} />
              </View>
              <Text style={{
                color: '#616973', fontSize: 14, fontWeight: "normal", width: "90%", textAlign: 'center', alignSelf: "center"
              }}>In order to check your credit score, you must complete fill the following information</Text>
              {/* /First Name */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22, marginTop: 20 }}>First Name</Text>
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
                  placeholder="Saurabh"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Email */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22, marginTop: 20 }}>Email</Text>
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
                  placeholder="Jain@gmail.com"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Mobile Number */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22, marginTop: 20 }}>Mobile Number</Text>
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
                  placeholder="+91"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* /Pan Card Number */}
              <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600', marginLeft: 22, marginTop: 20 }}>Pan Card Number</Text>
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
                  placeholder="879 098 6543"
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              {/* Ends */}
              <View style={{ flexDirection: "row", width: '90%', alignSelf: "center" }}>
                <CheckBox
                  size={22}
                  checkedColor={Colors.appHeaderColor}
                  checked={this.state.isChecked}
                  onPress={() => {
                    this.setState({ isChecked: !this.state.isChecked });
                  }}
                />
                <Text style={{
                  color: '#18171E', fontSize: 12, fontWeight: 'normal', marginTop: 10, width: "80%"
                }}>By Proceeding, I agree and consent to the Terms & Conditions of Riddhi</Text>
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
              <View style={{ marginBottom: 20, alignSelf: "center" }}>
                <Text style={{ color: '#3A4450', fontSize: 14, fontWeight: "normal" }}>
                  Terms & Conditions  •  Privacy Policy
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default UpdateScore;