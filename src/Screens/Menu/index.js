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
import ListItem from '../../Components/ListItems';
import styles from './Style';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants/Constants';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 65,
      isModalVisible: false,
    };
  }
  updateCredit = () => {
    this.props.navigation.navigate('UpdateScore')
    this.props.onVisible(1)
  }
  savedPost = () => {
    this.props.navigation.navigate('SavedPosts')
    this.props.onVisible(1)
  }
  profilEdit = () => {
    this.props.navigation.navigate('Profile')
    this.props.onVisible(1)
  }
  termsCondition = () => {
    this.props.navigation.navigate('FaqTermCondition')
    this.props.onVisible(1)
  }
  render() {
    return (
      <>
        <Modal isVisible={this.props.profileVisibile}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.modelContainer}>
              <TouchableOpacity onPress={() => this.props.onVisible(1)}>
                <Image source={Images.delete} style={{ alignSelf: 'flex-end', width: 30, height: 30, margin: 10 }} />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", marginBottom: 30 }}>
                <View style={{ flexDirection: "row" }}>
                  <ImageBackground source={Images.Avatar} style={{ width: 30, height: 30, marginLeft: 13 }} />
                  <Image source={Images.circle} style={{ tintColor: '#6FCF97', width: 10, height: 10, marginLeft: -7 }} />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: '#616973', fontWeight: '700' }}>Hi!</Text>
                  <Text style={{ color: '#18171E', fontWeight: '700', fontSize: 15 }}>Saurabh Jain</Text>
                </View>
              </View>
              <TouchableOpacity onPress={this.profilEdit}>
                <ListItem
                  titleName="Edit Profile"
                  imageSource={Images.editProfile}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.savedPost}>
                <ListItem
                  titleName="Saved Posts"
                  imageSource={Images.savedPosts}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.updateCredit}>
                <ListItem
                  titleName="Check/Update Credit Score"
                  imageSource={Images.clock}
                />
              </TouchableOpacity>
              <ListItem
                titleName="My Groups"
                imageSource={Images.myGroups}
              />
              <TouchableOpacity onPress={this.termsCondition}>
                <ListItem
                  titleName="Terms & Conditions"
                  imageSource={Images.term}
                />
              </TouchableOpacity>
              <View style={{ marginTop: '10%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginBottom: 20, marginLeft: 15 }}>
                  <Image source={Images.logout} />
                  <Text style={{ color: '#18171E', fontSize: 20, fontWeight: '400', margin: 5, marginLeft: 20 }}>Log Out</Text>
                </View>
                <View style={{ marginRight: 10 }}>
                  <Text style={{ color: '#18171E', margin: 9, }}>App version 1.25</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </>
    )
  }

}
export default Menu;
