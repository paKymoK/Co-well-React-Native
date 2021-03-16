/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './lib/screens/HomeScreen.js';
import LoginScreen from './lib/screens/LoginScreen.js';
import SplashScreen from './lib/screens/SplashScreen.js';
import OnBoardScreen from './lib/screens/OnBoardScreen.js';
import {View, StatusBar} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          tabBar={() => null}
          headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;