import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'; 

// You can import from local files
import FacebookScreen from './screens/facebook';
import InstgramScreen from './screens/InstagramScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  InstagramScreen : InstagramScreen,
  FacebookScreen:Facebook
})
const Appcontainer = createAppContainer(TabNavigator)