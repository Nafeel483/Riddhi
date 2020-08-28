import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import colors from '../Styles/Colors';
import HomeScreen from '../Screens/FeedHome';
import Poll from '../Screens/Poll';
import Notification from '../Screens/Notification';
import Netwrok from '../Screens/FriendRequest';
import Images from '../Styles/Images';
import Groups from '../Screens/Groups/Groups';

const styles = StyleSheet.create({
  tabBarItemContainerFocused: {
    flex: 1,
    marginTop: 5,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F16222',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#F16222'
  },
  tabBarItemContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f0f1f2',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: '#f0f1f2',
  },
  tabBarIcon: {
    width: 23,
    height: 23,
    tintColor: '#B0B4B9'
  },
  tabBarIconFocused: {
    tintColor: colors.White,
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Netwrok: { screen: Netwrok },
    Poll: { screen: Poll },
    Groups: { screen: Groups },
    Notification: { screen: Notification },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = Images.Home;
            break;
          case 'Netwrok':
            iconSource = Images.FriendsRequest;
            break;
          case 'Poll':
            iconSource = Images.poll;
            break;
          case 'Groups':
            iconSource = Images.Groups;
            break;

          case 'Notification':
            iconSource = Images.Notification;
            break;


          default:
            iconSource = Images.Home;
        }
        return (
          <View style={[styles.tabBarItemContainer, focused && styles.tabBarItemContainerFocused]}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colors.White,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
        // marginBottom: 10,
      },
      labelStyle: {
        color: colors.grey,
      },
    },
  },
);
