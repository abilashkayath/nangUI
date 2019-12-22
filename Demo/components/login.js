import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "native-base";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text></Text>
        <Button bordered>
          <Text>Primary</Text>
        </Button>
      </View>
    );
  }
}

export default Login;
