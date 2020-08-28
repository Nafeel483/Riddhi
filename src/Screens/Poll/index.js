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
import SegmentedControlTab from "react-native-segmented-control-tab";
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../Components/Button';
import styles from './Style';
import Images from '../../Styles/Images';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';


class Poll extends Component {
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
            ArrowName=''
            headerName={this.state.selectedIndex === 0 ? 'Post' : 'Poll'}
            navigation={this.props.navigation}
            screen=''
            valuePress=''
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
                  width: '75%',
                  borderRadius: 15,
                  shadowOpacity: 0.3,
                  shadowRadius: 1,
                  shadowOffset: { width: 0, height: 0.5 * 2 },
                  elevation: 2,
                  shadowColor: 'gray',
                }}
              >
                <SegmentedControlTab
                  values={["Post", "Poll"]}
                  selectedIndex={this.state.selectedIndex}
                  onTabPress={this.handleIndexChange}
                  activeTabStyle={{ backgroundColor: Colors.White }}
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
                  <View style={{ marginTop: '60%' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('VerifyOTP') }}>
                      <Button
                        titleName="Submit"
                        colorName={Colors.White}
                        type="login"
                      />
                    </TouchableOpacity>
                  </View>
                </>
                :
                <>
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
                  <View
                    style={{
                      marginTop: 20,
                      borderWidth: 1, borderRadius: 15, borderColor: '#FFFFFF', alignSelf: 'center',
                      width: '90%', padding: 10, backgroundColor: 'white', justifyContent: 'center',
                    }}>
                    <View style={{ marginBottom: 30 }}>
                      <TextInput
                        placeholderTextColor='#616973'
                        placeholder="Option 1"
                        style={{ borderColor: '#D8DADC', borderWidth: 0.5, borderRadius: 5, height: 40, padding: 10 }}
                      />
                      <TextInput
                        placeholderTextColor='#616973'
                        placeholder="Option 2"
                        style={{ borderColor: '#D8DADC', borderWidth: 0.5, borderRadius: 5, height: 40, padding: 10, marginTop: 10, marginBottom: 10 }}
                      />
                      <DropDownPicker
                        items={[
                          { label: 'Item 1', value: 'item1' },
                          { label: 'Item 2', value: 'item2' },
                        ]}
                        placeholder="Poll Duration"
                        placeholderStyle={{ color: "#616973" }}
                        defaultIndex={0}
                        containerStyle={{ height: 40, borderColor: '#D8DADC', }}
                        style={{ borderRadius: 20, borderWidth: 1 }}
                        onChangeItem={item => console.log(item.label, item.value)}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 12, backgroundColor: '#FCE0D3', borderColor: '#FCE0D3' }}>
                      <Text style={{ color: '#F16222', margin: 13, fontWeight: '600' }}>
                        Write a Post
                        </Text>
                    </View>
                    <View style={{ marginLeft: 13, borderWidth: 0.5, borderRadius: 12, backgroundColor: '#F16222', borderColor: '#F16222' }}>
                      <Text style={{ color: 'white', margin: 13, fontWeight: '600' }}>
                        Create a Poll
                        </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('VerifyOTP') }}>
                      <Button
                        titleName="Submit"
                        colorName={Colors.White}
                        type="login"
                      />
                    </TouchableOpacity>
                  </View>

                </>
            }
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default Poll;;;