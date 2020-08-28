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
import Menu, { MenuItem } from 'react-native-material-menu';
import ListItem from '../../Components/ListItems';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';


class SavedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Saved Posts'
            navigation={this.props.navigation}
            screen='main'
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#18171E', fontWeight: '600' }}>Saurabh Jain</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#898F96' }}>5h</Text>
                      <Image source={Images.world} style={{ margin: 3 }} />
                    </View>
                  </View>
                </View>
                <Image source={Images.Options} style={{ margin: 15 }} />
              </View>
              <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ color: '#18171E', }}>{Constants.NEWS_FEED_DISCRIPTION}</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', marginTop: 15, marginBottom: 20 }}>
                <Text style={{ color: '#2F80ED' }}>#reliance</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#investment</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#stocks</Text>
              </View>
              <View style={{
                borderColor: '#B0B4B9', flexDirection: 'row',
                borderRadius: 12, borderWidth: 0.2, width: '90%', alignSelf: 'center',
                justifyContent: "space-around", marginBottom: 10
              }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Emoji} />
                  <Text style={{ marginLeft: 5, color: '#F16222' }}>567</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Comment} />
                  <Text style={{ marginLeft: 5 }}>56</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Vector} />
                  <Text style={{ marginLeft: 5 }}>400</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Combined_Shape} />
                  <Text style={{ marginLeft: 5 }}>04</Text>
                </View>
              </View>
            </View>
            {/* .... Feed Container Where List Show Start*/}
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#18171E', fontWeight: '600' }}>Saurabh Jain</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#898F96' }}>5h</Text>
                      <Image source={Images.world} style={{ margin: 3 }} />
                    </View>
                  </View>
                </View>
                <Menu
                  ref={this.setMenuRef}
                  button={<TouchableOpacity onPress={this.showMenu}><Image source={Images.Options} style={{ margin: 15 }} /></TouchableOpacity>}
                >
                  <MenuItem onPress={this.hideMenu}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={Images.Mark} style={{ margin: 3, }} />
                      <Text>Save Post</Text>
                    </View>
                  </MenuItem>
                  <MenuItem onPress={this.hideMenu}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={Images.Add_User} style={{ margin: 3, }} />
                      <Text>Unfollow Vinay</Text>
                    </View>
                  </MenuItem>
                  <MenuItem onPress={this.hideMenu}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={Images.about} style={{ margin: 3, width: 13, height: 13 }} />
                      <Text>Report This Post</Text>
                    </View>
                  </MenuItem>
                </Menu>

              </View>
              <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ color: '#18171E', }}>{Constants.NEWS_FEED_DISCRIPTION}</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', marginTop: 15, marginBottom: 20 }}>
                <Text style={{ color: '#2F80ED' }}>#reliance</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#investment</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#stocks</Text>
              </View>
              <View style={{
                borderColor: '#B0B4B9', flexDirection: 'row',
                borderRadius: 12, borderWidth: 0.2, width: '90%', alignSelf: 'center',
                justifyContent: "space-around", marginBottom: 10
              }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Emoji} />
                  <Text style={{ marginLeft: 5, color: '#F16222' }}>567</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Comment} />
                  <Text style={{ marginLeft: 5 }}>56</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Vector} />
                  <Text style={{ marginLeft: 5 }}>400</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Combined_Shape} />
                  <Text style={{ marginLeft: 5 }}>04</Text>
                </View>
              </View>
            </View>
            {/* .... Feed Container Where List Show Ends*/}
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#18171E', fontWeight: '600' }}>Saurabh Jain</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#898F96' }}>5h</Text>
                      <Image source={Images.world} style={{ margin: 3 }} />
                    </View>
                  </View>
                </View>
                <Image source={Images.Options} style={{ margin: 15 }} />
              </View>
              <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ color: '#18171E', }}>{Constants.NEWS_FEED_DISCRIPTION}</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', marginTop: 15, marginBottom: 20 }}>
                <Text style={{ color: '#2F80ED' }}>#reliance</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#investment</Text>
                <Text style={{ color: '#2F80ED', marginLeft: 10 }}>#stocks</Text>
              </View>
              <View style={{
                borderColor: '#B0B4B9', flexDirection: 'row',
                borderRadius: 12, borderWidth: 0.2, width: '90%', alignSelf: 'center',
                justifyContent: "space-around", marginBottom: 10
              }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Emoji} />
                  <Text style={{ marginLeft: 5, color: '#F16222' }}>567</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Comment} />
                  <Text style={{ marginLeft: 5 }}>56</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Vector} />
                  <Text style={{ marginLeft: 5 }}>400</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <Image source={Images.Combined_Shape} />
                  <Text style={{ marginLeft: 5 }}>04</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default SavedPosts;