import React, { Component } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import { Ionicons } from "@expo/vector-icons";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      AntDesign: require("native-base/Fonts/AntDesign.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    {
      return <Login style={styles.container}></Login>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
