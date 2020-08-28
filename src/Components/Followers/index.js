import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
const Followers = ({
  ProfileImage,
  Follow,
  Active
}) => {
  return (
    <>
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
        <View style={{ flexDirection: 'row', justifyContent: "space-between", margin: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", }}>
              <Image style={{ width: 50, borderWidth: 0.5, borderColor: "white", borderRadius: 50, height: 50 }}
                source={{
                  uri: ProfileImage,
                }} />
              <Image source={Active} style={{ width: 15, height: 15, marginTop: 35, marginLeft: -10 }} />
            </View>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: "#16181E" }}>Johran Smith</Text>
              <Text style={{ marginTop: 3, fontSize: 12, fontWeight: 'normal', color: "#898F96" }}>@jacobtrader99</Text>
            </View>
          </View>
          <Image source={Follow} style={{
            marginTop: 5,
            width: 100, height: 40, borderWidth: 0.5, borderColor: '#F16222',
            borderRadius: 12
          }} />
        </View>
      </View>
    </>
  );
};
export default Followers;
