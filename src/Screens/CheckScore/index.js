import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';

class CheckScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Your Credit Score'
            navigation={this.props.navigation}
            screen='Profile'
          />
          <ScrollView>
            <View style={{ alignSelf: 'center', marginTop: 30, marginBottom: 30, }}>
              <ImageBackground source={Images.circle} style={{
                width: 25, height: 25, marginLeft: '28%', marginBottom: -22
              }} />
              <Image source={Images.Congrats} style={{ width: 120, height: 24, }} />
            </View>
            <Text style={{
              color: "#616973", fontSize: 14, fontWeight: 'normal', width: '85%',
              textAlign: "center", alignSelf: "center"
            }}>Check out your credit score below & challenge your friends to check theirs too!</Text>
            <Image source={Images.CreditScore} style={{ width: '90%', height: 215, alignSelf: "center", marginTop: 20 }} />
            <View style={{ marginTop: 15, flexDirection: "row", alignSelf: 'center' }}>
              <Text style={{ fontSize: 32, fontWeight: '500', color: "#00BD1E" }}>825</Text>
              <Text style={{ fontSize: 32, fontWeight: '500', color: "#616973" }}>/</Text>
              <Text style={{ fontSize: 32, fontWeight: '500', color: "#616973" }}>900</Text>
            </View>
            <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '500', marginTop: 5, alignSelf: "center" }}>Credit Score</Text>
            <Text style={{
              marginTop: 20,
              color: '#616973', fontSize: 14, alignSelf: "center", width: '85%', textAlign: 'center',
              fontWeight: "normal"
            }}>Congratulations, you've got 98.6 %ile in Credit Score Ranking</Text>

            <TouchableOpacity style={{ marginTop: 40, marginBottom: 20 }}
              onPress={() => { this.props.navigation.navigate('ChallangeFriend') }}>
              <Button
                titleName="Challenge Your Friends"
                colorName={Colors.White}
                type="login"
              />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>

      </>
    );
  }
}
export default CheckScore;