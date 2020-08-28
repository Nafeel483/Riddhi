import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import { Divider } from 'react-native-elements';
import ListItem from '../../Components/ListItems';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Button from '../../Components/Button'
import * as Constants from '../../Constants/Constants';


class ProfileCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 65,
      isModalVisible: false,
    };
  }
  checkCreditScore = () => {
    this.props.navigation.navigate('CheckScore')
    this.props.onVisible(1)
  }
  completeProfile = () => {
    this.props.navigation.navigate('CompleteProfile')
    this.props.onVisible(1)
  }
  render() {
    return (
      <>
        <Modal
          animationIn={'bounceInUp'} isVisible={this.props.isModalVisible}
          style={styles.modelMainConatinerAddCar}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={[styles.modelContainer, { height: '80%', marginTop: '120%' }]}>
              <TouchableOpacity onPress={() => this.props.onVisible(1)}>
                <Image
                  style={[styles.crossAlert, { tintColor: Colors.darkGrey }]}
                  source={
                    Images.Indicator}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: "#18171E",
                  fontWeight: '700', fontSize: 20, marginLeft: '7%', marginTop: 20
                }}>
                {Constants.PROFILE_CHECKLIST}</Text>
              <View style={{ width: '85%', alignSelf: 'center', marginTop: 30, marginBottom: 30 }}>
                <Text style={{ color: '#616973', }}>{Constants.PROFILE_CHECKLIST_DESCRIPTION}</Text>
              </View>
              <View style={{ width: '90%', alignSelf: 'center' }}>
                <ListItem titleName="Connect Facebook Account" imageSource="" />
                <Divider style={{ backgroundColor: '#B0B4B9' }} />
                <ListItem titleName="Connect Brokerage Account" imageSource="" />
                <Divider style={{ backgroundColor: '#B0B4B9' }} />
                <TouchableOpacity onPress={this.checkCreditScore}>
                  <ListItem titleName="Check Credit Score" imageSource="" />
                </TouchableOpacity>
                <Divider style={{ backgroundColor: '#B0B4B9' }} />
                <TouchableOpacity onPress={this.completeProfile}>
                  <ListItem titleName="Complete your Profile" imageSource="" />
                </TouchableOpacity>
                <Divider style={{ backgroundColor: '#B0B4B9' }} />
              </View>
              <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.onVisible(1)}>
                <Button
                  titleName="Close"
                  colorName={Colors.appHeaderColor}
                  type="close"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    )
  }

}
export default ProfileCheckList;