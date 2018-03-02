import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigator } from 'react-navigation';

import Home from "./components/Home";
import Chat from "./components/Chat";


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
