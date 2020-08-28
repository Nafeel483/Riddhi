import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import Images from '../../Styles/Images';
import styles from './Style';

class TextInputComponent extends Component {
  render() {
    const {
      imageSource,
      placeholder,
      changeText,
      secureTextEntry,
      type,
    } = this.props;
    return (
      <View style={styles.container}>
        {type == 'acc' ? (
          <View style={styles.SectionStyleEdit}>
            <TextInput
              style={styles.textInputWrapper}
              secureTextEntry={secureTextEntry}
              onChangeText={(value) => changeText(value)}
            />
          </View>
        ) : type === 'search' ? (
          <View style={styles.SectionStyle1}>
            <Image source={Images.search} style={styles.inputSearchIcon1} />
            <View style={styles.borderSeperator} />
            <TextInput
              style={styles.textInputWrapper}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              onChangeText={(value) => changeText(value)}
            />
          </View>
        ) : (
              <View style={styles.SectionStyle}>
                <Image source={imageSource} style={styles.inputIcon} />
                {type !== 'seperator' && <View style={styles.borderSeperator} />}
                <TextInput
                  style={styles.textInputWrapper}
                  secureTextEntry={secureTextEntry}
                  placeholder={placeholder}
                  onChangeText={(value) => changeText(value)}
                />
              </View>
            )}
      </View>
    );
  }
}
export default TextInputComponent;
