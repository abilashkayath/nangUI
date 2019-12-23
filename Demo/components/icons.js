import React, { Component } from "react";
import { StyleSheet, View,Image  } from "react-native";


class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        
      <Image source={require("../assets/images/fbLogo.png")} style={{width: "25%"}}>
        
      </Image>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center"
  },
  
});

export default Icons;
