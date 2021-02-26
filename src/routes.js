import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './screens/Welcome';
import Questions from './screens/Questions';
import Acknowledgment from './screens/Acknowledgment';
import Answers from './screens/Answers'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Questions" component={Questions} />
        <AppStack.Screen name="Acknowledgment" component={Acknowledgment} />
        <AppStack.Screen name="Answers" component={Answers} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}