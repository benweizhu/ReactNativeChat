import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View>
        <View>head</View>
        <View>body</View>
        <View>
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
