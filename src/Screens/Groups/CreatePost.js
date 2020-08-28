import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Button from '../../Components/Button';
import styles from './Style';
import Images from '../../Styles/Images';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';


class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      situation: '',
      hashTag: ''
    };
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  _onChangeText = (text) => {
    this.setState({ situation: text });
  };
  _hashTag = (text) => {
    this.setState({ hashTag: text });
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName={'Group • Post'}
            navigation={this.props.navigation}
            screen='GroupFeed'
          />
          <ScrollView>
            <View style={{
              marginTop: 20,
              marginBottom: 20,
              width: '90%', alignSelf: "center", borderWidth: 0.5,
              backgroundColor: "white", borderColor: "white",
              borderRadius: 10,
              shadowOpacity: 0.3,
              shadowRadius: 1,
              shadowOffset: { width: 0, height: 0.5 * 2 },
              elevation: 2,
              shadowColor: 'gray',

            }}>
              <Text style={{
                color: '#18171E', fontSize: 14, margin: 10,
                fontWeight: '600', alignSelf: 'center'
              }}>Write a Post</Text>
            </View>
            <View
              style={{
                borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF', alignSelf: 'center',
                width: '90%', padding: 10, backgroundColor: 'white', justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Avatar
                  size="small"
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: '#16181E', fontSize: 15, fontWeight: '500' }}>Johran Smith</Text>
                  <Image source={Images.world} style={{ marginTop: 5, width: 12, height: 12 }} />
                </View>

              </View>
              <View style={{ borderWidth: 0.3, borderRadius: 12, marginTop: 15, borderColor: '#D8DADC' }}>
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
                  placeholder="What do you want to share 
                        today?......."
                  placeholderTextColor='#616973'
                  value={this.state.situation}
                  onChangeText={this._onChangeText}
                />
              </View>
              <View style={{
                marginTop: 15, marginBottom: 10, margin: 5, justifyContent: 'space-between',
                flexDirection: 'row'
              }}>
                <TextInput
                  style={{
                    // width: "90%",
                    height: 20,

                  }}
                  placeholder="#Add Hashtags to improve visiblity"
                  placeholderTextColor='#616973'
                  value={this.state.hashTag}
                  onChangeText={this._hashTag}
                />
                <View style={{ flexDirection: 'row', margin: 5 }}>
                  <Image source={Images.Video_Camera_Add} />
                  <Image source={Images.Camera} style={{ marginLeft: 10 }} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: '30%' }}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('VerifyOTP') }}>
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
export default CreatePost;