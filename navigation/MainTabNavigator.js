import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen/Todo.screen';
import DetailsScreen from '../screens/DetailsScreen/Details.screen';
import CompleteScreen from '../screens/CompleteScreen/Complete.screen';
import ActiveScreen from '../screens/ActiveScreen/Active.Screen';

const HomeStack = createStackNavigator(
  {
    Todo: TodoScreen,
    Details: DetailsScreen
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-done-all'} />
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-checkmark-circle'} />
  ),
};

ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CompleteStack,
  ActiveStack
});

tabNavigator.path = '';

export default tabNavigator;
