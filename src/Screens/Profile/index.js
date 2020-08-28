import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from './Style';
import Images from '../../Styles/Images';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import PieChart from '../../Components/PieChart';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileChecklist from '../ProfileCheckList';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      handleChangeSpec: false,
      isModalVisible: false,
    };
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  _handleChangeSpec = () => {
    this.setState({ handleChangeSpec: !this.state.handleChangeSpec })
  }
  openModel = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Profile'
            navigation={this.props.navigation}
            screen='main'
            valuePress=''
          />
          <ScrollView>
            <View
              style={{
                borderWidth: 1, borderRadius: 10, marginTop: 3, borderColor: '#FFFFFF', alignSelf: 'center',
                width: '100%', padding: 10, backgroundColor: 'white', justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Avatar
                  size="large"
                  rounded
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/a74e/9649/131fd24594c5659d94b5e7e6cae47068?Expires=1598227200&Signature=clxvpp50hITosntxe9pZH58NEz6o76~~ebSOJ~z8Ri~nZrwNHj-2Kpf~ynczbslg2jZnN1BjnFTwT4Po5NdiGldTPaz0GHxg5fbksKa3mghw5vyz0uJFiaDOFqbRaiPNJkGTir2eA3GUSf4TH6pHg0irfZfr-Gefof3ZuEEPRdCa55vJaAJr8BISlrM7mLHLt0V0anlQWCShXW2ua6G5K36UsNjCXxEvTosUTtPE2fgYABoc4XmA4IJQl7zSJx7IrFk~5abpxn0cFIEgcjwz9ABybFZoUkYUHXJNEy2SuI7XS1I-K-VQE3GxwA6mGxlHg87VtkK4g-HD9~MROhS62g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
                <View style={{ marginLeft: 12 }}>
                  <Text style={{ fontSize: 24, fontWeight: '500', color: "#18171E" }}>Vinay Acharya</Text>
                  <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', marginTop: 5 }}>Manager-Client Assets, Citi Group</Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image source={Images.Clothes} />
                    <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', marginLeft: 10 }}>MBA from IIM K</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={Images.Pin} />
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', marginLeft: 10 }}>Bangalore, India</Text>
                    </View>
                    <TouchableOpacity onPress={this.openModel}>
                      <Image source={Images.poll} style={{ marginRight: -8, width: 15, height: 15 }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {this.state.handleChangeSpec == false ?
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: '#F16222', borderColor: '#F16222' }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                      {'IntraDay Trader'}
                    </Text>
                  </View>
                  <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: '#F16222', borderColor: '#F16222', marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                      {'Mutual Fund'}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={this._handleChangeSpec}>
                    <Image source={Images.expandDown} style={{ width: 30, height: 30, marginTop: 5, marginLeft: 50 }} />
                  </TouchableOpacity>
                  <View>
                  </View>
                </View>
                :
                <>
                  <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96' }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Stocks'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: '#F16222', borderColor: '#F16222', marginLeft: 30 }}>
                      <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'IntraDay Trader'}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={this._handleChangeSpec}>
                      <Image source={Images.expandRight} style={{ width: 20, height: 20, marginTop: 10, marginLeft: '47%' }} />
                    </TouchableOpacity>
                    <View>
                    </View>
                  </View>
                  {/* /Start 2nd */}
                  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96' }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'LongTerm Trader'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: '#F16222', borderColor: '#F16222', marginLeft: 20 }}>
                      <Text style={{ color: 'white', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Mutual Fund'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'PPF'}
                      </Text>
                    </View>
                    <View>
                    </View>
                  </View>
                  {/* /Start 3nd */}
                  <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 7 }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96' }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Insurance'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Analyst'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Bonds'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Equity'}
                      </Text>
                    </View>
                    <View>
                    </View>
                  </View>
                  {/* /Start 4th */}
                  <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 7 }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96' }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Tax Saving'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'Broker'}
                      </Text>
                    </View>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: 'white', borderColor: '#898F96', marginLeft: 20 }}>
                      <Text style={{ color: '#898F96', fontSize: 14, fontWeight: 'normal', margin: 10 }}>
                        {'SIP'}
                      </Text>
                    </View>
                    <View>
                    </View>
                  </View>
                </>

              }
              <Divider style={{ backgroundColor: '#B0B4B9', marginTop: 20 }} />
              <View style={{ flexDirection: 'row', margin: 10, justifyContent: "space-between", marginRight: 30, marginLeft: 30, marginTop: 20 }}>
                <View>
                  <Text style={{ color: "#3A4450", fontSize: 22, fontWeight: 'bold' }}>450</Text>
                  <Text style={{ color: "#898F96", fontSize: 11, fontWeight: '500', marginTop: 3, alignSelf: 'center' }}>Post</Text>
                </View>
                <View>
                  <Text style={{ color: "#3A4450", fontSize: 22, fontWeight: 'bold' }}>14,565</Text>
                  <Text style={{ color: "#898F96", fontSize: 11, fontWeight: '500', marginTop: 3, alignSelf: 'center' }}>Followers</Text>
                </View>
                <View>
                  <Text style={{ color: "#3A4450", fontSize: 22, fontWeight: 'bold' }}>8,565</Text>
                  <Text style={{ color: "#898F96", fontSize: 11, fontWeight: '500', marginTop: 3, alignSelf: 'center' }}>Following</Text>
                </View>
              </View>
              <Divider style={{ backgroundColor: '#B0B4B9', marginTop: 10 }} />
              <View style={{ alignSelf: 'center', marginTop: 15 }}>
                <Text style={{ color: '#18171E', fontSize: 16, fontWeight: '600' }}>Profile Completion</Text>
                <Text style={{ marginTop: 15, color: '#898F96', fontSize: 12, fontWeight: 'normal' }}>Your profile is not compete. Complete your profile to gain more visibility in your network & become influential.</Text>
                {/* /Profle Completion Start */}
                <Image source={Images.Bar} style={{ alignSelf: "center", marginBottom: 15, marginTop: 15, }} />
                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={Images.circle} style={{ width: 13, height: 13 }} />
                    <Text style={{ color: '#18171E', fontSize: 13, fontWeight: '600', marginLeft: 5 }}>PROGRESS</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingLeft: 35 }}>
                    <Image source={Images.circle} style={{ width: 13, height: 13, tintColor: '#62CA76' }} />
                    <Text style={{ color: '#18171E', fontSize: 13, fontWeight: '600', marginLeft: 5 }}>COMPLETE</Text>
                  </View>
                </View>
                {/* /Profle Completion Ends */}
              </View>
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
                    values={["Profile", "Portfolio"]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    activeTabStyle={{
                      backgroundColor: Colors.White, borderBottomWidth: 1.5, borderBottomColor: Colors.appHeaderColor,
                    }}
                    activeTabTextStyle={{
                      color: Colors.appHeaderColor,
                      fontSize: 18,
                      fontWeight: "700",
                      marginVertical: 5
                    }}
                    tabStyle={{ borderColor: Colors.White, borderWidth: 1.3, }}
                    tabTextStyle={{
                      color: '#B0B4B9',
                      fontSize: 18,
                      fontWeight: "700",
                      marginVertical: 5
                    }}
                  />
                </View>
              </View>
              {
                this.state.selectedIndex === 0 ?
                  <>
                    <View style={{ margin: 10 }}>
                      <Text style={{ color: '#898F96', fontSize: 12, fontWeight: "normal" }}
                      >Keep your profile updated with your latest instruments so your followers get the right direction</Text>
                    </View>
                    {/* /THe Start */}
                    <View style={{
                      shadowOpacity: 0.3,
                      shadowRadius: 0.3,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                      backgroundColor: 'white',
                      borderWidth: 0.5, borderRadius: 12, width: '98%', alignSelf: "center", marginTop: 20, borderColor: '#DEE0E2'
                    }}>
                      <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={{
                          borderWidth: 0.5, borderRadius: 12, height: 40,
                          marginTop: 8,
                          backgroundColor: '#F16222', borderColor: '#F16222', flexDirection: "row"
                        }}>
                          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'normal', margin: 10, }}>
                            {'Credit Score 867'}
                          </Text>
                          <Image source={Images.Arrow_Down} style={{ tintColor: 'white', margin: 10, marginLeft: -5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                          <Text style={{ color: '#18171E', fontSize: 14, marginTop: 10 }}>Shared with</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Avatar
                              size="2"
                              rounded
                              source={{
                                uri:
                                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                              }}
                              onPress={() => console.log("Works!")}
                              activeOpacity={0.7}
                            />
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                          </View>
                          <Image source={Images.upload} style={{ margin: 10 }} />
                        </View>
                      </View>
                    </View>
                    {/* /THe Start */}
                    <View style={{
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                      backgroundColor: 'white',
                      borderWidth: 0.5, borderRadius: 12, width: '98%', alignSelf: "center", marginTop: 20, borderColor: '#DEE0E2'
                    }}>
                      <View style={{ flexDirection: 'row', margin: 10, }}>
                        <View style={{
                          borderWidth: 0.5, borderRadius: 12, height: 40,
                          marginTop: 8,
                          backgroundColor: '#FCE0D3', borderColor: '#FCE0D3', flexDirection: "row"
                        }}>
                          <Text style={{ color: '#F16222', fontSize: 12, fontWeight: 'normal', margin: 10, }}>
                            {'Credit Cards'}
                          </Text>
                          <Image source={Images.Arrow_Down} style={{ tintColor: '#F16222', margin: 10, marginLeft: -5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10, marginLeft: 30 }}>
                          <Text style={{ color: '#18171E', fontSize: 14, marginTop: 10 }}>Shared with</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Avatar
                              size="2"
                              rounded
                              source={{
                                uri:
                                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                              }}
                              onPress={() => console.log("Works!")}
                              activeOpacity={0.7}
                            />
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                          </View>
                          <Image source={Images.upload} style={{ margin: 10 }} />
                        </View>
                      </View>
                    </View>
                    {/* /THe Start */}
                    <View style={{
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      shadowOffset: { width: 0, height: 0.5 * 2 },
                      elevation: 2,
                      shadowColor: 'gray',
                      backgroundColor: 'white',
                      borderWidth: 0.5, borderRadius: 12, width: '98%', alignSelf: "center", marginTop: 20, borderColor: '#DEE0E2'
                    }}>
                      <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={{
                          borderWidth: 0.5, borderRadius: 12, height: 40,
                          marginTop: 8,
                          backgroundColor: '#FCE0D3', borderColor: '#FCE0D3', flexDirection: "row"
                        }}>
                          <Text style={{ color: '#F16222', fontSize: 12, fontWeight: 'normal', margin: 10, }}>
                            {'Life Insurances'}
                          </Text>
                          <Image source={Images.Arrow_Down} style={{ tintColor: '#F16222', margin: 10, marginLeft: -5 }} />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                          <Text style={{ color: '#18171E', fontSize: 14, marginTop: 10 }}>Shared with</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Avatar
                              size="2"
                              rounded
                              source={{
                                uri:
                                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                              }}
                              onPress={() => console.log("Works!")}
                              activeOpacity={0.7}
                            />
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                            <View style={{ marginLeft: -10 }}>
                              <Avatar
                                size="2"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                                }}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                              />
                            </View>
                          </View>
                          <Image source={Images.upload} style={{ margin: 10 }} />
                        </View>
                      </View>
                    </View>
                  </>
                  :
                  <PieChart />
              }
            </View>
            {
              this.state.isModalVisible == true &&
              <ProfileChecklist isModalVisible={this.state.isModalVisible}
                onVisible={this.openModel}
                navigation={this.props.navigation}
              />
            }
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default Profile;