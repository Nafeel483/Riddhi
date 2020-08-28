import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Style';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import TextInput from '../../Components/TextInput';
import Button from '../../Components/Button';
import * as Constants from '../../Constants/Constants';
import images from '../../Styles/Images';

class Notification extends Component {
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
            headerImage=''
            ArrowName=''
            headerName='Notification'
            navigation=''
            screen=''
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
                    <Text style={{ color: '#18171E', fontWeight: '600', margin: 5, fontSize: 16 }}>New Follow Request</Text>
                    <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                      <Text style={{ color: '#18171E', }}>{Constants.NOTIFICATION_REQUEST}</Text>
                    </View>
                    <View style={{
                      flexDirection: 'row', marginTop: 20, margin: 5,
                      justifyContent: 'space-around',
                    }}>
                      <Text style={{ color: '#898F96', marginTop: 8 }}>5h ago</Text>
                      <View style={{ flexDirection: 'row', }}>
                        <View style={{ borderWidth: 0.5, borderRadius: 6, backgroundColor: '#F16222', borderColor: '#F16222' }}>
                          <Text style={{ margin: 7, color: 'white' }}>Accept</Text>
                        </View>
                        <View style={{ borderWidth: 0.5, borderRadius: 6, backgroundColor: 'white', borderColor: '#F16222', marginLeft: 10 }}>
                          <Text style={{ margin: 7, color: '#F16222' }}>Decline</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* New Portion Start */}
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#18171E', fontWeight: '600', margin: 5, fontSize: 16 }}>Check your Credit Score</Text>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 10, marginLeft: -10 }}>
                      <Text style={{ color: '#18171E', }}>{Constants.NOTIFICATION_CREDIT}</Text>
                    </View>
                    <View style={{
                      flexDirection: 'row', marginTop: 20, margin: 5,
                      justifyContent: 'space-between',
                    }}>
                      <Text style={{ color: '#898F96', marginTop: 8 }}>1 June 2020, 12:33 AM</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* New Portion Start */}
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '90%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", margin: 15 }}>
                  <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 30, height: 30 }} />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: '#18171E', fontWeight: '600', margin: 5, fontSize: 16 }}>New Follow Request</Text>
                    <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                      <Text style={{ color: '#18171E', }}>{Constants.NOTIFICATION_REQUEST}</Text>
                    </View>
                    <View style={{
                      flexDirection: 'row', marginTop: 20, margin: 5,
                      justifyContent: 'space-around',
                    }}>
                      <Text style={{ color: '#898F96', marginTop: 8 }}>5h ago</Text>
                      <View style={{ flexDirection: 'row', }}>
                        <View style={{ borderWidth: 0.5, borderRadius: 6, backgroundColor: '#F16222', borderColor: '#F16222' }}>
                          <Text style={{ margin: 7, color: 'white' }}>Accept</Text>
                        </View>
                        <View style={{ borderWidth: 0.5, borderRadius: 6, backgroundColor: 'white', borderColor: '#F16222', marginLeft: 10 }}>
                          <Text style={{ margin: 7, color: '#F16222' }}>Decline</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default Notification;