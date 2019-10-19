import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DetailsScreen from '../screens/DetailsScreen/Details.screen';

export default createAppContainer(
  createStackNavigator(
    {
      Main: MainTabNavigator,
      Detail: DetailsScreen
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
