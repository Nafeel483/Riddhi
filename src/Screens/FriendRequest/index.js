import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from './Style';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';
import Followers from '../../Components/Followers';
import RequestAccept from '../../Components/RequestAccept';
class FriendRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            headerName='Your Network'
            navigation={this.props.navigation}
            screen=''
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '100%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
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
                    values={["Followers", "Follow Requests"]}
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
                    <Followers
                      ProfileImage={'https://s3-alpha-sig.figma.com/img/a74e/9649/131fd24594c5659d94b5e7e6cae47068?Expires=1598227200&Signature=clxvpp50hITosntxe9pZH58NEz6o76~~ebSOJ~z8Ri~nZrwNHj-2Kpf~ynczbslg2jZnN1BjnFTwT4Po5NdiGldTPaz0GHxg5fbksKa3mghw5vyz0uJFiaDOFqbRaiPNJkGTir2eA3GUSf4TH6pHg0irfZfr-Gefof3ZuEEPRdCa55vJaAJr8BISlrM7mLHLt0V0anlQWCShXW2ua6G5K36UsNjCXxEvTosUTtPE2fgYABoc4XmA4IJQl7zSJx7IrFk~5abpxn0cFIEgcjwz9ABybFZoUkYUHXJNEy2SuI7XS1I-K-VQE3GxwA6mGxlHg87VtkK4g-HD9~MROhS62g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                      Follow={Images.followed}
                      Active={Images.Active}
                    />
                  </>
                  :
                  <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/a74e/9649/131fd24594c5659d94b5e7e6cae47068?Expires=1598227200&Signature=clxvpp50hITosntxe9pZH58NEz6o76~~ebSOJ~z8Ri~nZrwNHj-2Kpf~ynczbslg2jZnN1BjnFTwT4Po5NdiGldTPaz0GHxg5fbksKa3mghw5vyz0uJFiaDOFqbRaiPNJkGTir2eA3GUSf4TH6pHg0irfZfr-Gefof3ZuEEPRdCa55vJaAJr8BISlrM7mLHLt0V0anlQWCShXW2ua6G5K36UsNjCXxEvTosUTtPE2fgYABoc4XmA4IJQl7zSJx7IrFk~5abpxn0cFIEgcjwz9ABybFZoUkYUHXJNEy2SuI7XS1I-K-VQE3GxwA6mGxlHg87VtkK4g-HD9~MROhS62g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.Active}
                  />
              }
            </View>
            {
              this.state.selectedIndex === 0 ?
                <>

                  <Followers
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Follow={Images.follow}
                    Active={Images.notActive}
                  />
                  <Followers
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Follow={Images.followed}
                    Active={Images.notActive}
                  />
                  <Followers
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Follow={Images.follow}
                    Active={Images.notActive}
                  />
                  <Followers
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Follow={Images.follow}
                    Active={Images.notActive}
                  />
                  <Followers
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Follow={Images.follow}
                    Active={Images.notActive}
                  />
                </>
                :
                <>
                  <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.notActive}
                  />
                  <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.notActive}
                  />
                   <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.notActive}
                  />
                   <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.notActive}
                  />
                   <RequestAccept
                    ProfileImage={'https://s3-alpha-sig.figma.com/img/9d40/385c/7d86d49d70dbf88e2d5c6b44da7da701?Expires=1598227200&Signature=Mg7kmpoZz823SofpuEmDCGNVabVF0qu6Mwa4y34VIO62hdIb6SLHL6jdoE5c3dSq5UuA3ARN00EmHBVNRHLcjgzxAGUP8PUnseI-5Z8-2F614rK5QFNLFBvScJJTi4f2KmAyEopS8nrcPA3LXfd8MZDjoQZJeIzI8XDL1TujLbNSi9kt4VEYWWlvWt~nJ6uTjEaXiDPQM6R5kWNv05YAYZM1ojGbGtDGVDKiAh~wtd5OBW2jjvUsmGbFN~PmcFPOmEWQm2qoQSLN5zRUEyDQsVYt8T-5HV57-DqBIjxaLE4LPBfRHwzBZZBoMhHYKWd~3kJZUQu4icEXI7JArSLV7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
                    Active={Images.notActive}
                  />
                </>
            }
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default FriendRequest;