/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import MainScreen from './MainScreen';
import {CategoriesScreen, ItemScreen, DetailScreen} from '@Containers';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();

const CategoriesStack = createStackNavigator();

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator initialRouteName="Categories" headerMode="none">
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen name="Item" component={ItemScreen} />
      <CategoriesStack.Screen name="Detail" component={DetailScreen} />
    </CategoriesStack.Navigator>
  );
}
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Shop') {
                iconName = focused ? 'rocket' : 'close';
              } else if (route.name === 'Danh mục') {
                iconName = focused ? 'rocket' : 'close';
              } else if (route.name === 'Giỏ hàng') {
                iconName = focused ? 'rocket' : 'close';
              } else if (route.name === 'Yêu thích') {
                iconName = focused ? 'rocket' : 'close';
              } else if (route.name === 'Cá nhân') {
                iconName = focused ? 'rocket' : 'close';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Shop" component={MainScreen} />
          <Tab.Screen name="Danh mục" component={CategoriesStackScreen} />
          <Tab.Screen
            name="Giỏ hàng"
            children={() => <TestScreen title={'Giỏ hàng'} />}
          />
          <Tab.Screen
            name="Yêu thích"
            children={() => <TestScreen title={'Yêu thích'} />}
          />
          <Tab.Screen
            name="Cá nhân"
            children={() => <TestScreen title={'Cá nhân'} />}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

class TestScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{this.props.title}</Text>
      </View>
    );
  }
}
