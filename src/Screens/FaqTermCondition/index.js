import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Divider } from 'react-native-elements';
import ListItem from '../../Components/ListItems';
import styles from './Style';
import Images from '../../Styles/Images';
import Header from '../../Components/Header';
import * as Constants from '../../Constants/Constants';
import { ScrollView } from 'react-native-gesture-handler';


class FaqTermCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordian: false,
      accordian1: false,

    };
  }
  accoridanToogle = () => {
    if (this.state.accordian === false) {
      return this.setState({ accordian: true });
    } else {
      return this.setState({ accordian: false });
    }
  };
  accoridanToogle1 = () => {
    if (this.state.accordian1 === false) {
      return this.setState({ accordian1: true });
    } else {
      return this.setState({ accordian1: false });
    }
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeViewStyle} />
        <SafeAreaView style={styles.mainStarted}>
          <Header
            ArrowName={Images.backIcon}
            headerName='Faq'
            navigation={this.props.navigation}
            screen='main'
            valuePress={this.onPrfilePress}
          />
          <ScrollView>
            <View style={{
              borderWidth: 1, borderRadius: 10, borderColor: '#FFFFFF', width: '100%', alignSelf: "center",
              backgroundColor: 'white', marginTop: 10,
            }}>
              <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 10 }}>
                <ScrollView horizontal={true}>
                  <View style={{
                    borderRightWidth: 0.5, backgroundColor: 'white', shadowColor: "#000",
                    borderRightColor: '#B0B4B9',
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                  }}>
                    <Text style={{
                      color: '#F16222', fontWeight: '600', marginBottom: 10, marginLeft: 20, marginRight: 20,
                      marginTop: 10, fontSize: 15
                    }}>Account</Text>
                  </View>
                  <View style={{
                    borderRightWidth: 0.1, backgroundColor: 'white', shadowColor: "#000",
                    borderRightColor: '#B0B4B9',
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                  }}>
                    <Text style={{
                      color: '#B0B4B9', fontWeight: '600', marginBottom: 10, marginLeft: 20, marginRight: 20,
                      marginTop: 10, fontSize: 15
                    }}>Trending</Text>
                  </View>
                  <View style={{
                    borderRightWidth: 0.1, backgroundColor: 'white', shadowColor: "#000",
                    borderRightColor: '#B0B4B9',
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                  }}>
                    <Text style={{
                      color: '#B0B4B9', fontWeight: '600', marginBottom: 10, marginLeft: 20, marginRight: 20,
                      marginTop: 10, fontSize: 15
                    }}>Mutual Fund</Text>
                  </View>
                  <View style={{
                    borderRightWidth: 0.1, backgroundColor: 'white', shadowColor: "#000",
                    borderRightColor: '#B0B4B9',
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                  }}>
                    <Text style={{
                      color: '#B0B4B9', fontWeight: '600', marginBottom: 10, marginLeft: 20, marginRight: 20,
                      marginTop: 10, fontSize: 15
                    }}>Insurance</Text>
                  </View>
                </ScrollView>
              </View>
              <TouchableOpacity onPress={this.accoridanToogle}>
                <ListItem titleName="Question 1" imageSource="" />
                {this.state.accordian === true && (
                  <>
                    <Text
                      style={[
                        styles.notificationWrapperAccordian,
                        { color: '#616973' },
                      ]}>
                      {Constants.FAQ_TERM_CONDITION}
                    </Text>

                  </>
                )}
              </TouchableOpacity>
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <TouchableOpacity onPress={this.accoridanToogle1}>
                <ListItem titleName="Question 2" imageSource="" />
                {this.state.accordian1 === true && (
                  <>
                    <Text
                      style={[
                        styles.notificationWrapperAccordian,
                        { color: '#616973' },
                      ]}>
                      {Constants.FAQ_TERM_CONDITION}
                    </Text>

                  </>
                )}
              </TouchableOpacity>
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 3" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 4" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 5" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 6" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 7" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 8" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 9" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 10" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 11" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 12" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
              <ListItem titleName="Question 13" imageSource="" />
              <Divider style={{ backgroundColor: '#B0B4B9' }} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}
export default FaqTermCondition;