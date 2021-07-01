import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Item} from '../graphql/types';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/detail';

type RootStackParamList = {
  Detail: {item: Item};
  Learn: undefined;
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Learn"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name="Detail"
      component={DetailScreen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: '#2c124b',
        },
        headerTintColor: 'white',
      }}
    />
  </RootStack.Navigator>
);
