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
import StarRating from "react-native-star-rating";
import { ScrollView } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle'
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';
import ProfileMenu from '../Menu';

const progressCustomStyles = {
  backgroundColor: '#F16222',
  borderRadius: 12,
  borderColor: '#F16222',
};
const progressCustomStyles1 = {
  backgroundColor: '#2F80ED',
  borderRadius: 12,
  borderColor: '#2F80ED',
};

class FeedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 65,
      isModalVisible: false,
      profileVisibile: false
    };
  }
  _menu = null;
  openModel = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
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
  onPrfilePress = (value) => {
    this.setState({ profileVisibile: !this.state.profileVisibile })
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName=''
            headerName=''
            navigation=''
            screen=''
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{ flexDirection: "row", marginTop: 15, width: '94%', alignSelf: "center", justifyContent: 'space-evenly' }}>
              <TouchableOpacity onPress={this.openModel}
                style={{
                  borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF',
                  width: '48%', padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
                }}
              >
                <View
                  style={{
                    borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF',
                    width: '100%', padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
                  }}>
                  <ProgressCircle
                    percent={70}
                    radius={50}
                    borderWidth={12}
                    color="#FDDE69"
                    shadowColor="#fff7d9"
                    bgColor="#fff"
                    style={{ marginLeft: 20 }}
                  >
                    <Text style={{ fontSize: 18 }}>{'70%'}</Text>
                  </ProgressCircle>
                  <Text style={{ marginTop: 14, fontSize: 15, fontWeight: '600' }}>Credit Score 780</Text>
                  <Image source={Images.Compare} style={{ marginTop: 10 }} />
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF',
                  width: '45%', padding: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
                }}>
                <ProgressCircle
                  percent={30}
                  radius={50}
                  borderWidth={12}
                  color="#F4814E"
                  shadowColor="#FCE0D3"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                </ProgressCircle>
                <Text style={{ marginTop: 14, fontSize: 15, fontWeight: '600' }}>Credit Credit</Text>
                <Image source={Images.Explore} style={{ marginTop: 10 }} />
              </View>
            </View>
            <View style={{
              marginTop: 15,
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: 20, fontWeight: '700', margin: 15, }}>{Constants.PROFILE_COMPLETION}</Text>
              <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, marginBottom: 18 }}>
                <Text style={{ color: '#898F96', textAlign: 'center' }}>{Constants.PROFILE_DESCRIPTION}</Text>
              </View>
              <Image source={Images.Bar} style={{ alignSelf: "center", marginBottom: 15 }} />
              <View style={{ flexDirection: "row", paddingRight: 80, marginBottom: 20 }}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={Images.circle} style={{ width: 13, height: 13 }} />
                  <Text style={{ color: '#18171E', fontSize: 13, fontWeight: '600', marginLeft: 5 }}>PROGRESS</Text>
                </View>
                <View style={{ flexDirection: "row", paddingLeft: 30 }}>
                  <Image source={Images.circle} style={{ width: 13, height: 13, tintColor: '#62CA76' }} />
                  <Text style={{ color: '#18171E', fontSize: 13, fontWeight: '600', marginLeft: 5 }}>COMPLETE</Text>
                </View>
              </View>
            </View>
            <Text style={{ color: '#18171E', fontSize: 25, fontWeight: '800', margin: 20 }}>Feed</Text>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white',
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                <Text style={{ color: '#F16222', fontWeight: '600' }}>Newest</Text>
                <Text style={{ color: '#B0B4B9', fontWeight: '600' }}>  Trending</Text>
                <Text style={{ color: '#B0B4B9', fontWeight: '600' }}>Most Popular</Text>
              </View>
            </View>
            {/* .... Feed Container Where List Show Start*/}
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('UserProfile') }}>
                    <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('UserProfile') }}>
                      <Text style={{ color: '#18171E', fontWeight: '600' }}>Saurabh Jain</Text>
                    </TouchableOpacity>
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
            {/* .... Feed Container Where List Show starts*/}

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
            {/* .... Feed Container Where List Show Ends*/}
            {/* .... Feed Container Where List Show starts*/}
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
              <View>
                <Text style={{ color: '#F16222', marginLeft: 20 }}>Infosys 65%</Text>
                <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center' }}>
                  <View style={{ width: '80%', marginTop: 18 }}>
                    <ProgressBarAnimated
                      {...progressCustomStyles}
                      width={220}
                      value={this.state.progress}
                      backgroundColorOnComplete="#F16222"
                    />
                  </View>
                  <Image source={Images.vote1} style={{ marginRight: 20 }} />
                </View>
              </View>
              <View>
                <Text style={{ color: '#2F80ED', marginLeft: 20 }}>Wipro 65%</Text>
                <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center' }}>
                  <View style={{ width: '80%', marginTop: 18 }}>
                    <ProgressBarAnimated
                      {...progressCustomStyles1}
                      width={220}
                      value={this.state.progress}
                      backgroundColorOnComplete="#2F80ED"
                    />
                  </View>
                  <Image source={Images.vote2} style={{ marginRight: 20 }} />
                </View>
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
            <View style={{ marginBottom: '10%' }} />
            {
              <Modal
                animationIn={'bounceInUp'} isVisible={this.state.isModalVisible}
                style={styles.modelMainConatinerAddCar}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                  <View style={[styles.modelContainer, { height: '60%', marginTop: '120%' }]}>
                    <TouchableOpacity onPress={this.openModel}>
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
                      {Constants.INVESTMENT_PERIOD}</Text>
                    <View style={{ width: '85%', alignSelf: 'center', marginTop: 30 }}>
                      <Text style={{ color: '#616973', }}>{Constants.INVESTMENT_DESCRIPTION}</Text>
                    </View>
                    <Text
                      style={{
                        color: '18171E', marginLeft: '7%', marginTop: 20,
                        fontWeight: '600'
                      }}>
                      {Constants.INVESTMENT_WRAPPER}</Text>
                    <View style={{
                      flexDirection: 'row', marginTop: 20,
                      justifyContent: 'space-evenly', width: '90%', alignSelf: 'center'
                    }}>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 40, alignSelf: 'center'
                      }}>
                        <StarRating
                          maxStars={1}
                          rating={5}
                          starSize={18}
                          fullStar={Images.star_yellow}
                          emptyStar={Images.star_gray}
                        />
                      </View>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 60, alignSelf: 'center'
                      }}>
                        <StarRating
                          maxStars={2}
                          rating={0}
                          starSize={18}
                          fullStar={Images.star_yellow}
                          emptyStar={Images.star_gray}
                        />
                      </View>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 100, alignSelf: 'center'
                      }}>
                        <StarRating
                          maxStars={3}
                          rating={0}
                          starSize={18}
                          fullStar={Images.star_yellow}
                          emptyStar={Images.star_gray}
                        />
                      </View>
                    </View>
                    {/*  Year.............Styling  */}
                    <View style={{
                      flexDirection: 'row', marginTop: 20, marginBottom: 40,
                      justifyContent: 'space-evenly', width: '90%', alignSelf: 'center'
                    }}>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 60, alignSelf: 'center'
                      }}>
                        <Text style={{ textAlign: 'center', color: '#F16222', fontWeight: '500' }}>1 year</Text>
                      </View>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 80, alignSelf: 'center'
                      }}>
                        <Text style={{ textAlign: 'center', fontWeight: '500' }}>2-4 year</Text>
                      </View>
                      <View style={{
                        borderWidth: 0.5, borderRadius: 12, borderColor: '#B0B4B9',
                        padding: 10, width: 80, alignSelf: 'center',
                      }}>
                        <Text style={{ textAlign: 'center', fontWeight: '500' }}>5+ year</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('PhoneLogin') }}>
                      <Button
                        titleName="Submit"
                        colorName={Colors.White}
                        type="login"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            }
            {
              this.state.profileVisibile == true &&
              <ProfileMenu profileVisibile={this.state.profileVisibile}
                onVisible={this.onPrfilePress}
                navigation={this.props.navigation}
              />
            }
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default FeedHome;