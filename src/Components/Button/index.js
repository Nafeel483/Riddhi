import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Style';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';


const ButtonComponent = ({
  titleName,
  colorName,
  type,
}) => {
  var color;
  var border;
  var borderWidth;
  var borderColor;
  switch (type) {
    case 'login':
      color = Colors.appHeaderColor;
      border = 12;
      break;
    case 'close':
      color = Colors.White;
      border = 12;
      borderWidth = 1;
      borderColor = Colors.appHeaderColor;
      break;
    case 'fb':
      color = Colors.fbColor;
      border = 8;
      break;
    case 'gp':
      color = Colors.White;
      border = 8;
      break;
    case 'nx':
      color = Colors.appHeaderColor;
      break;
    case 'bk':
      color = Colors.White;
      break;
    case 'ba':
      color = Colors.White;
      border = 8;
      borderWidth = 1;
      borderColor = Colors.cancel;
      break;
  }
  return (
    <>
      {/* <TouchableOpacity
      onPress={() => {
        navigation.navigate(screen);
      }}> */}
      {type == 'nx' || type == 'bk' ? (
        <View style={[styles.buttonContainerRow, { backgroundColor: color }]}>
          <Text style={[styles.buttonStyle, { color: colorName }]}>
            {titleName}
          </Text>
        </View>
      ) : (
          <View
            style={[
              styles.buttonContainer,
              {
                backgroundColor: color,
                borderRadius: border,
                borderWidth: borderWidth,
                borderColor: borderColor,
              },
            ]}>
            {type == 'fb' && (
              <Image
                source={Images.fbletter}
                style={styles.facebookAndGoogle}
                resizeMode="contain"
              />
            )}
            {type == 'gp' && (
              <Image
                source={Images.gpletter}
                style={styles.facebookAndGoogle}
                resizeMode="contain"
              />
            )}
            {type == 'ln' && (
              <Image
                source={Images.linkdin}
                style={styles.linkdin}
                resizeMode="contain"
              />
            )}
            <Text style={[styles.buttonStyle, { color: colorName }]}>
              {titleName}
            </Text>
          </View>
        )}
      {/* </TouchableOpacity> */}
    </>
  );
};
export default ButtonComponent;
