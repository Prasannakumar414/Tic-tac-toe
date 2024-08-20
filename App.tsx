

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchScreen from './screens/LaunchScreen';
import GameScreen from './screens/GameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  LaunchScreen: undefined;
  GameScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export type Props = NativeStackScreenProps<RootStackParamList, 'LaunchScreen', 'RootStack'>;

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
