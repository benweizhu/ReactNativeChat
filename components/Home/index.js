import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("./logo.png")} style={styles.headerLogo} />
          <Text style={styles.headerTitle}>An AI Chat Bot</Text>
        </View>
        <View style={styles.body} />
        <View style={styles.footer}>
          <TouchableOpacity>
            <View style={styles.startChatButton}>
              <Text style={styles.startChatButtonText}>Let's chat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF"
  },
  header: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50
  },
  headerLogo: {
    width: 200,
    resizeMode: "contain"
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#899197"
  },
  body: {
    flex: 3,
    alignItems: "center"
  },
  footer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  startChatButton: {
    width: 93,
    backgroundColor: "#F11A1A",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3
  },
  startChatButtonText: {
    color: "#FFF"
  }
});
