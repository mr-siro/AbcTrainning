import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppRoute} from './AppRoute';
import {AuthNavigator} from './AuthNavigator';
import {
  YouTubeScreen,
  ProfileScreen,
  BlockList,
  FlightGray,
  FlightRed,
} from '@screens';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={AppRoute.FLIGHTGRAY}
      tabBarOptions={{
        activeTintColor: '#C32032',
        showLabel: true,
      }}>
      <Tab.Screen name={AppRoute.FLIGHTGRAY} component={FlightGray} />
      <Tab.Screen name={AppRoute.FLIGHTRED} component={FlightRed} />
      <Tab.Screen
        name={AppRoute.YOUTUBE}
        component={YouTubeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'logo-youtube'}
              type={'ionicon'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.BLOCKLIST}
        component={BlockList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'block'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoute.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name={'ios-contact'}
              type={'ionicon'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoute.AUTH} headerMode="none">
        <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
        <Stack.Screen name={AppRoute.MyTabs} component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
