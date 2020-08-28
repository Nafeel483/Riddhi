import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Button from '../../Components/Button';
import styles from './Style';
import Images from '../../Styles/Images';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';


class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      situation: '',
      hashTag: ''
    };
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={[styles.mainStarted, { backgroundColor: 'white' }]}>
          <Header
            ArrowName={Images.backIcon}
            headerName={'Create a Group'}
            navigation={this.props.navigation}
            screen='Groups'
          />
          <ScrollView>
            <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 30 }}>
              <ImageBackground source={Images.circle} style={{
                width: 50, height: 50, marginLeft: '40%', marginBottom: -25
              }} />
              <Image source={Images.Fill_group} style={{ width: 180, height: 25, }} />
            </View>
            <Text style={{
              color: '#616973', fontSize: 14, fontWeight: 'normal', textAlign: 'center', width: '80%', alignSelf: 'center'
            }}
            >Complete your profile to gain more visibility in your network & opportunity to be influential</Text>
            <View style={{
              width: "80%",
              borderStyle: 'dashed', borderColor: "#F16222",
              marginTop: 20, borderWidth: 1, borderRadius: 12, alignSelf: 'center'
            }}>
              <Image source={Images.Upload_Picture} style={{
                width: 95, marginTop: 15, marginBottom: 15,
                height: 42, alignSelf: 'center'
              }} />
            </View>
            <Text style={{ color: '#18171E', fontSize: 14, fontWeight: '600', marginTop: 15, marginLeft: 20 }}>Group Name</Text>
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
            <Text style={{ color: '#18171E', fontSize: 14, fontWeight: '600', marginTop: 15, marginLeft: 20 }}>Designation</Text>
            <View style={{
              borderWidth: 0.5, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC',
              width: "90%", alignSelf: 'center'
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
            <View style={{ flexDirection: "row", width: '95%', alignSelf: "center", marginTop: 20 }}>
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
              }}>By Proceeding, I agree to the rules & regulations of creating a group.</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
              <TouchableOpacity >
                <Button
                  titleName="Submit"
                  colorName={Colors.White}
                  type="login"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default CreateGroup;