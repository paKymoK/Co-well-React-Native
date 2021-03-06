/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TestScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  OnBoardScreen,
  DetailScreen,
} from '@Containers';

import {View, StatusBar} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Test" headerMode="none">
          <Stack.Screen name="Test" component={TestScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
