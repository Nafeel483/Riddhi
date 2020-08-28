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
import ShareChallange from '../../Components/ShareFriends';
class ChallangeFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      situation: ""
    };
  }
  _onChangeText = (text) => {
    this.setState({ situation: text });
  }
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Challenge your Friends'
            navigation={this.props.navigation}
            screen='CheckScore'
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '100%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 0,
            }}>
              <View style={styles.SectionStyle1}>
                <TextInput
                  style={styles.textInputWrapper}
                  placeholder='Your Contacts'
                  placeholderTextColor='#18171E'
                  onChangeText={this._onChangeText}

                />
                <Image source={Images.search} style={styles.inputSearchIcon1} />
              </View>
              <View style={{ marginTop: 15 }}>
                <ShareChallange
                  ProfileImage={'https://s3-alpha-sig.figma.com/img/a74e/9649/131fd24594c5659d94b5e7e6cae47068?Expires=1598227200&Signature=clxvpp50hITosntxe9pZH58NEz6o76~~ebSOJ~z8Ri~nZrwNHj-2Kpf~ynczbslg2jZnN1BjnFTwT4Po5NdiGldTPaz0GHxg5fbksKa3mghw5vyz0uJFiaDOFqbRaiPNJkGTir2eA3GUSf4TH6pHg0irfZfr-Gefof3ZuEEPRdCa55vJaAJr8BISlrM7mLHLt0V0anlQWCShXW2ua6G5K36UsNjCXxEvTosUTtPE2fgYABoc4XmA4IJQl7zSJx7IrFk~5abpxn0cFIEgcjwz9ABybFZoUkYUHXJNEy2SuI7XS1I-K-VQE3GxwA6mGxlHg87VtkK4g-HD9~MROhS62g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                  Active={Images.Active}
                />
              </View>
            </View>
            <ShareChallange
              ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              Active={Images.notActive}
            />
             <ShareChallange
              ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              Active={Images.notActive}
            />
             <ShareChallange
              ProfileImage={'https://s3-alpha-sig.figma.com/img/7a33/6efa/8793c4c4f8f7d4b7c7ade171414fac42?Expires=1598227200&Signature=IkW12K3h4u~ro6tmi504WdSsGjF3cad1KfobHPEKHaXNMpV-rCH-soWsGPHCVTX-Jc48HGao61YxvAcr~UfJiJmoRbEoKHTrvDO4zxE0FVCnxs9PlIsJu~rO67-l3pamaM9SLfpPD9-m6ekuancu5yxr2CHEPO2opj8BxWAeBr01qZkqq9g3jg62RnRiUYePWNm9nEcsC8DlISrXqDouQ-aiHBVOM6MnADZ4YNVIxFq~ZqxkMQfYXKH8ayoPo2uvweYkcjKcPjEXmZtZErimKONYbVVXW4NGcEmvvwVwKokBqYlo6KcQeBjNIhoRobyXWq-J5V8McobgsN40gWFEWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              Active={Images.notActive}
            />
             <ShareChallange
              ProfileImage={'https://s3-alpha-sig.figma.com/img/7a33/6efa/8793c4c4f8f7d4b7c7ade171414fac42?Expires=1598227200&Signature=IkW12K3h4u~ro6tmi504WdSsGjF3cad1KfobHPEKHaXNMpV-rCH-soWsGPHCVTX-Jc48HGao61YxvAcr~UfJiJmoRbEoKHTrvDO4zxE0FVCnxs9PlIsJu~rO67-l3pamaM9SLfpPD9-m6ekuancu5yxr2CHEPO2opj8BxWAeBr01qZkqq9g3jg62RnRiUYePWNm9nEcsC8DlISrXqDouQ-aiHBVOM6MnADZ4YNVIxFq~ZqxkMQfYXKH8ayoPo2uvweYkcjKcPjEXmZtZErimKONYbVVXW4NGcEmvvwVwKokBqYlo6KcQeBjNIhoRobyXWq-J5V8McobgsN40gWFEWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              Active={Images.notActive}
            />
             <ShareChallange
              ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              Active={Images.notActive}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default ChallangeFriend;