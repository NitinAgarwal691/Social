import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import InstagramScreens from './screens/InstagramScreens';
import FacebookScreen from './screens/FacebookScreen';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  )
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreens}
})

const AppContainer=createAppContainer(TabNavigator)