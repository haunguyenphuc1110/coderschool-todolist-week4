import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createStackNavigator(
    {
      Main: MainTabNavigator
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);
