import { createStackNavigator } from 'react-navigation-stack';
import MainContainer from './BottomTabNavigation';
import SavedPosts from '../Screens/SavedPosts';
import FaqTermCondition from '../Screens/FaqTermCondition';
import UserProfile from '../Screens/UserProfile';
import Profile from '../Screens/Profile';
import CompleteProfile from '../Screens/CompleteProfile';
import UpdateScore from '../Screens/UpdateCreditScore';
import CheckScore from '../Screens/CheckScore';
import ChallangeFriend from '../Screens/ChallangeFriend';
import GroupFeed from '../Screens/Groups/GroupFeed';
import CreatePost from '../Screens/Groups/CreatePost';
import CreateGroup from '../Screens/Groups/CreateGroup';
const HomeNavigation = createStackNavigator(
  {
    main: { screen: MainContainer },
    SavedPosts: { screen: SavedPosts },
    FaqTermCondition: { screen: FaqTermCondition },
    UserProfile: { screen: UserProfile },
    Profile: { screen: Profile },
    CompleteProfile: { screen: CompleteProfile },
    UpdateScore: { screen: UpdateScore },
    CheckScore: { screen: CheckScore },
    ChallangeFriend: { screen: ChallangeFriend },
    GroupFeed: { screen: GroupFeed },
    CreatePost: { screen: CreatePost },
    CreateGroup: { screen: CreateGroup },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;
