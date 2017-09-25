import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Feed from "./screens/Feed";
import Leaders from "./screens/Leaders";
import You from "./screens/You";
import Messages from "./screens/Messages";
import AddActivity from "./screens/AddActivity";
import AddMessage from "./screens/AddMessage";
import User from "./screens/User";

console.disableYellowBox = true;

const Home = TabNavigator({
  Feed: { screen: Feed },
  Leaders: { screen: Leaders },
  Messages: { screen: Messages },
  You: { screen: You },
},
{
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      backgroundColor: '#fff',
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {width: 0, height: -2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    showLabel: false
  },

});

const lvlup = StackNavigator({
  Home: { screen: Home},
  AddActivity: { screen: AddActivity },
  AddMessage: { screen: AddMessage },
  User: { screen: User },
},
{
  initialRouteName: 'Home',
  headerMode: 'screen',
  mode: 'card'
})

export default lvlup;
