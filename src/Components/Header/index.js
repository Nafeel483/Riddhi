import React from 'react';
import { Header } from 'react-native-elements';
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import styles from './Style';

const HeaderComponent = ({
  valuePress,
  ArrowName,
  headerName,
  navigation,
  screen,
  rightIcon,
  rightIconValue,
  rightIconScreen
}) => {
  return (
    <>
      <Header
        backgroundColor={Colors.White}
        leftComponent={
          ArrowName != '' &&
          < TouchableOpacity onPress={() => {
            navigation.navigate(screen)
          }}>
            <View style={{ borderWidth: 1, borderRadius: 12, backgroundColor: '#e8ebed', borderColor: '#e8ebed' }} >
              <Image source={ArrowName} style={{ width: 20, height: 20, margin: 5 }} />
            </View>
          </TouchableOpacity>
        }
        centerComponent={
          headerName == '' ? (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.SectionStyle1}>
                <Image source={Images.search} style={styles.inputSearchIcon1} />
                <TextInput
                  style={styles.textInputWrapper}
                  placeholder='Search'
                  placeholderTextColor='#8F92A1'
                  onChangeText={(value) => changeText(value)}
                />
              </View>
              <TouchableOpacity onPress={() => { valuePress(1) }}>
                <Image source={Images.profilePicture} style={{ marginLeft: 15, width: 40, height: 50 }} />
              </TouchableOpacity>
            </View>
          ) : (
              {
                text: headerName,
                style: { color: Colors.black, fontSize: 20, fontWeight: 'bold', },
              }
            )
        }

        rightComponent={
          rightIcon == 'yes' &&
          < TouchableOpacity onPress={() => { navigation.navigate(rightIconScreen) }}>
            <View style={{ borderWidth: 0.5, borderRadius: 10, backgroundColor: '#FCE0D3', borderColor: '#FCE0D3', width: 100 }}>
              <Text style={{ color: '#F16222', margin: 7, fontWeight: '500', fontSize: 12, textAlign: "center" }}>{rightIconValue}</Text>
            </View>
          </TouchableOpacity>
        }
      />
    </>
  );
};
export default HeaderComponent;
