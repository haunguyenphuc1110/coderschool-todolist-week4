import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DetailsScreen from '../screens/DetailsScreen/Details.screen';

export default createAppContainer(
  createStackNavigator(
    {
      Main: MainTabNavigator,
      Details: DetailsScreen
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
