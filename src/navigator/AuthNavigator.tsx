import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './AppRoute';
import {SignIn, SignUp} from '@screens';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={AppRoute.SIGNIN} component={SignIn} />
      <Stack.Screen name={AppRoute.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};
