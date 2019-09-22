import SportsScreen from '../screens/SportsScreen';
import SportsDetailScreen from '../components/SportsDetailScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import EventScreen from '../screens/EventScreen';

const screens = {
  Screen1: {
    screen: SportsScreen
  },
  Screen2: {
    screen: SportsDetailScreen
  },
  Screen3: {
    screen: EventScreen
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Screen1',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 1,
    },
  })
}

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);