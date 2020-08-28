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
import SegmentedControlTab from "react-native-segmented-control-tab";
import Metrics from '../../Styles/Metrices';
import StarRating from "react-native-star-rating";
import { ScrollView } from 'react-native-gesture-handler';
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

class GroupFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 65,
      isModalVisible: false,
      profileVisibile: false,
      selectedIndex: 0,

    };
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Groups'
            navigation={this.props.navigation}
            screen='Groups'
            rightIcon='yes'
            rightIconValue='Leave'
          />
          <ScrollView>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CreatePost') }}>
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
                <Image source={Images.GroupList4} style={{ width: "100%", height: 100, marginBottom: 15 }} />
              </View>
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: Metrics.padding,
                paddingVertical: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  padding: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  width: '95%',
                  borderRadius: 15,
                  shadowOpacity: 0.3,
                  shadowRadius: 1,
                  shadowOffset: { width: 0, height: 0.5 * 2 },
                  elevation: 2,
                  shadowColor: 'gray',
                }}
              >
                <SegmentedControlTab
                  values={["Feed", "About", "Members"]}
                  selectedIndex={this.state.selectedIndex}
                  onTabPress={this.handleIndexChange}
                  activeTabStyle={{ backgroundColor: Colors.White, }}
                  activeTabTextStyle={{
                    color: Colors.appHeaderColor,
                    fontSize: 14,
                    fontWeight: "700",
                    marginVertical: 5,
                  }}
                  tabStyle={{ borderColor: Colors.White, borderWidth: 1.3, }}
                  tabTextStyle={{
                    color: '#B0B4B9',
                    fontSize: 14,
                    fontWeight: "700",
                    marginVertical: 5
                  }}
                />
              </View>
            </View>
            {this.state.selectedIndex == 0 ?
              <>


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
              </>
              : this.state.selectedIndex == 1 ?
                <>
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
                    <View style={{ margin: 10 }}>
                      <Text style={{ color: "#18171E", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Group Description</Text>
                      <Text
                        style={{
                          color: '#616973', fontWeight: 'normal', fontSize: 12, marginTop: 20, marginBottom: 50
                        }}
                      >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                    </View>
                  </View>
                </>
                :
                <>
                  {/* First */}
                  <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-around' }}>
                    <View style={{
                      marginTop: 20,
                      marginBottom: 20,
                      width: '45%', alignSelf: "center", borderWidth: 0.5,
                      backgroundColor: "white", borderColor: "white",
                      borderRadius: 10,
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                    }}>
                      <Image
                        style={{
                          alignSelf: "center", width: 60, height: 60, marginTop: 20,
                          borderWidth: 0.5, borderColor: 'white', borderRadius: 50
                        }}
                        source={{
                          uri:
                            'https://s3-alpha-sig.figma.com/img/a74e/9649/131fd24594c5659d94b5e7e6cae47068?Expires=1598227200&Signature=clxvpp50hITosntxe9pZH58NEz6o76~~ebSOJ~z8Ri~nZrwNHj-2Kpf~ynczbslg2jZnN1BjnFTwT4Po5NdiGldTPaz0GHxg5fbksKa3mghw5vyz0uJFiaDOFqbRaiPNJkGTir2eA3GUSf4TH6pHg0irfZfr-Gefof3ZuEEPRdCa55vJaAJr8BISlrM7mLHLt0V0anlQWCShXW2ua6G5K36UsNjCXxEvTosUTtPE2fgYABoc4XmA4IJQl7zSJx7IrFk~5abpxn0cFIEgcjwz9ABybFZoUkYUHXJNEy2SuI7XS1I-K-VQE3GxwA6mGxlHg87VtkK4g-HD9~MROhS62g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                        }}
                      />
                      <Text style={{
                        color: '#18171E', fontWeight: '600', marginTop: 20,
                        fontSize: 14, alignSelf: 'center'
                      }}>Jacob Ginnish</Text>
                      <Text style={{
                        color: '#616973', fontSize: 12, alignSelf: 'center', marginTop: 10, marginBottom: 20,
                        fontWeight: 'normal'
                      }}>@j_ginn</Text>
                    </View>
                    <View style={{
                      marginTop: 20,
                      marginBottom: 20,
                      width: '45%', alignSelf: "center", borderWidth: 0.5,
                      backgroundColor: "white", borderColor: "white",
                      borderRadius: 10,
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                    }}>
                      <Image
                        style={{
                          alignSelf: "center", width: 60, height: 60, marginTop: 20,
                          borderWidth: 0.5, borderColor: 'white', borderRadius: 50
                        }}
                        source={{
                          uri:
                            'https://s3-alpha-sig.figma.com/img/c41d/53de/2e03b1ef2179275c9d1d958496952560?Expires=1598832000&Signature=aBE1WU32uHK9HP09Fqb90N6MpGCdJH5isAVwKsb5g51n~grDsI1vVbGajcDB~D7PXmc9C4R9IEodk5UTOgScFkXXEFbcqgJnrItyQ7sMqQT0LSRsvx-13MwlfoNM87ulg4sYBZjHNGn2CVrQ~x0sFQvVMQeJ6jPUx9nEyLymyoE~dM~-7EcpFY8FsaIgQJp7~52HzKD5J2pdt3ezXmTpTDsL5kftjDavFWfp4ixEdEVbJrzXJxhu05W0SBm6dEN-0N6q3xbs7EeFCSCo55syHMlp3dXvAZXVFTIdHf0VOtOVIMaiXHIcgC-lh9pCqsBoy5Ae04oADWh0IoWugxC15A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        }}
                      />
                      <Text style={{
                        color: '#18171E', fontWeight: '600', marginTop: 20,
                        fontSize: 14, alignSelf: 'center'
                      }}>Jacob Ginnish</Text>
                      <Text style={{
                        color: '#616973', fontSize: 12, alignSelf: 'center', marginTop: 10, marginBottom: 20,
                        fontWeight: 'normal'
                      }}>@j_ginn</Text>
                    </View>
                  </View>
                  {/* Second */}
                  <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-around' }}>
                    <View style={{
                      marginBottom: 20,
                      width: '45%', alignSelf: "center", borderWidth: 0.5,
                      backgroundColor: "white", borderColor: "white",
                      borderRadius: 10,
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                    }}>
                      <Image
                        style={{
                          alignSelf: "center", width: 60, height: 60, marginTop: 20,
                          borderWidth: 0.5, borderColor: 'white', borderRadius: 50
                        }}
                        source={{
                          uri:
                            'https://s3-alpha-sig.figma.com/img/fc93/e7bd/3dab84ad0d1533bcac3973c83bb3ef37?Expires=1598832000&Signature=YoAMfhDSwvoM5ved8B73D2JaPBTG4G4s0O6YqFS2B8206N7PeNyldtVQW2LmcwBt3DzBuuciC3zdeRw2-rSOAohNv71kYmB~s7tdP54g4bKBNrGgi1mo1lGJyj2bxowDWEx7qMz4pZ9kuKXDsKv9Gn9QyfU9xpDpXumJj6EPnj4otbhoGK~EvRGw8jZfetgjhjmffNrL4pVXW~9FL1oYNXpEPTiq41ZEjRI~u5X3uaNP2r2PYOF5N9f8jDsEkiAZ7tytSr43teNzl-sLLaN3SXFTU52AaXGGU8PpebPJKg8D32qBpRdyCHY78r8giOo-47GcUBh-b-npo8Eus3x1TA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        }}
                      />
                      <Text style={{
                        color: '#18171E', fontWeight: '600', marginTop: 20,
                        fontSize: 14, alignSelf: 'center'
                      }}>Jacob Ginnish</Text>
                      <Text style={{
                        color: '#616973', fontSize: 12, alignSelf: 'center', marginTop: 10, marginBottom: 20,
                        fontWeight: 'normal'
                      }}>@j_ginn</Text>
                    </View>
                    <View style={{
                      marginBottom: 20,
                      width: '45%', alignSelf: "center", borderWidth: 0.5,
                      backgroundColor: "white", borderColor: "white",
                      borderRadius: 10,
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                    }}>
                      <Image
                        style={{
                          alignSelf: "center", width: 60, height: 60, marginTop: 20,
                          borderWidth: 0.5, borderColor: 'white', borderRadius: 50
                        }}
                        source={{
                          uri:
                            'https://s3-alpha-sig.figma.com/img/c41d/53de/2e03b1ef2179275c9d1d958496952560?Expires=1598832000&Signature=aBE1WU32uHK9HP09Fqb90N6MpGCdJH5isAVwKsb5g51n~grDsI1vVbGajcDB~D7PXmc9C4R9IEodk5UTOgScFkXXEFbcqgJnrItyQ7sMqQT0LSRsvx-13MwlfoNM87ulg4sYBZjHNGn2CVrQ~x0sFQvVMQeJ6jPUx9nEyLymyoE~dM~-7EcpFY8FsaIgQJp7~52HzKD5J2pdt3ezXmTpTDsL5kftjDavFWfp4ixEdEVbJrzXJxhu05W0SBm6dEN-0N6q3xbs7EeFCSCo55syHMlp3dXvAZXVFTIdHf0VOtOVIMaiXHIcgC-lh9pCqsBoy5Ae04oADWh0IoWugxC15A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                        }}
                      />
                      <Text style={{
                        color: '#18171E', fontWeight: '600', marginTop: 20,
                        fontSize: 14, alignSelf: 'center'
                      }}>Jacob Ginnish</Text>
                      <Text style={{
                        color: '#616973', fontSize: 12, alignSelf: 'center', marginTop: 10, marginBottom: 20,
                        fontWeight: 'normal'
                      }}>@j_ginn</Text>
                    </View>
                  </View>
                </>
            }
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default GroupFeed;