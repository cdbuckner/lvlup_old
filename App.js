import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";
import Feed from "./screens/feed";

class Leaders extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Leaders</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

class Account extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Account</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const Home = TabNavigator({
  Feed: { screen: Feed },
  Leaders: { screen: Leaders },
  Account: { screen: Account },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
