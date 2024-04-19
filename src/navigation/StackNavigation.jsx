import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import Signup from '../screens/Signup';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}
