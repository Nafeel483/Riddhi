import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image
} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from './Style';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';
class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: "",
      selectedIndex: 0,
    };
  }
  handleIndexChange = (index) => {
    this.setState({ selectedIndex: index })
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName=''
            headerName='Groups'
            navigation={this.props.navigation}
            screen=''
            valuePress={this.onPrfilePress}
            rightIcon='yes'
            rightIconValue='Create Group'
            rightIconScreen="CreateGroup"
          />
          <ScrollView>
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
                  values={["Explore", "Your Groups", "Joined Groups"]}
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
            {
              this.state.selectedIndex === 0 ?
                <>
                  {/* /First View */}
                  <View style={{
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
                    <Image source={Images.GroupsList1} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                  </View>
                  {/* /2ns View */}
                  <View style={{
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
                    <Image source={Images.GroupList2} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                  </View>
                  {/* /3rd View */}
                  <View style={{
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
                    <Image source={Images.GroupList2} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                  </View>
                </> :
                this.state.selectedIndex === 1 ?
                  <>
                    {/* /First View */}
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("GroupFeed") }}>
                      <View style={{
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
                        <Image source={Images.GroupList3} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                      </View>
                    </TouchableOpacity>
                    {/* /2ns View */}
                    <View style={{
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
                      <Image source={Images.GroupList3} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                    </View>
                  </>
                  :
                  <>
                    {/* /First View */}
                    <View style={{
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
                      <Image source={Images.GroupsList1} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                    </View>
                    {/* /2ns View */}
                    <View style={{
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
                      <Image source={Images.GroupList2} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                    </View>
                    {/* /3rd View */}
                    <View style={{
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
                      <Image source={Images.GroupList2} style={{ width: "100%", height: 180, marginBottom: 15 }} />
                    </View>
                  </>
            }
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default Groups;