import React from 'react';
import { createStackNavigator, createBottomTabNavigator, withNavigationFocus } from 'react-navigation';
import COLORS from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen/Todo.screen';
import DetailsScreen from '../screens/DetailsScreen/Details.screen';
import CompleteScreen from '../screens/CompleteScreen/Complete.screen';
import ActiveScreen from '../screens/ActiveScreen/Active.screen';

const HomeStack = createStackNavigator(
  {
    Todo: TodoScreen
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <TabBarIcon
      name={'ios-list-box'}
    />
  ),
};

HomeStack.path = '';

const CompleteStack = createStackNavigator(
  {
    Complete: CompleteScreen
  }
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Complete',
  tabBarIcon: () => (
    <TabBarIcon name={'ios-done-all'} />
  ),
};

CompleteStack.path = '';

const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen,
  }
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: () => (
    <TabBarIcon name={'ios-checkmark-circle'} />
  ),
};

ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ActiveStack,
    CompleteStack
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: COLORS.BLACK
      },
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
