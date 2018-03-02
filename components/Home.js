import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.body}>
          <Text>Body</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <View>
              <Text>Let's chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  body: {
    flex: 3
  },
  footer: {
    flex: 1
  }
});
