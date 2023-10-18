

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './LaunchScreen';
import GameScreen from './GameScreen';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
  LaunchScreen: undefined;
  GameScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {

  return (
    <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="LaunchScreen">
            <RootStack.Screen name='LaunchScreen' component={LaunchScreen} />
            <RootStack.Screen name="GameScreen" component={GameScreen} />
        </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
