import React, { Component } from "react";
import { StyleSheet, View,ImageBackground  } from "react-native";
import { Button, Text,  Input, Item , Label} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Icons from "./icons"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={require("../assets/images/loginBg.jpg")} style={{width: '100%', height: '100%'}}>
        <View style = {styles.container}>
        <Text style = {styles.title}>nang</Text>
        <View style = {styles.formView}>
        <Item  regular style = {styles.formInput}>
            <Input placeholder='Username' placeholderTextColor="white" />   
            </Item>
        <Item  regular style = {styles.formInput}>
            <Input placeholder='Password' placeholderTextColor="white" />
        </Item>  
        </View>  
        <View style = {styles.buttonView}>
        <Button bordered style = {styles.formButton}>
          <Text style = {styles.buttonText} uppercase={false}>Sign in</Text>
        </Button>
        </View>
        <Text style = {styles.footerTitle}>Or login with</Text>
        <View>
          <Icons></Icons>
        </View>
      </View>
      </ImageBackground>
     
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
  title: {
    fontSize:26,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: 'Roboto_medium',
    color:"red"
  },
  nameLabel: {
    marginTop:20,
    color:"red",
  },
  formInput:{
    //height:10,
    backgroundColor:"gainsboro",
    opacity:.5,
    width:"80%",
    //borderColor:"red",
    marginTop:"3%",
    borderRadius:5
  },
  formView:{
    alignItems: "center",
  },
  formButton:{
    marginTop:"3%",
    backgroundColor:"white",
    color:"blue",
    //alignItems: "center",
    width:"50%",
    //textAlign: "center",
    borderRadius:5,
    borderColor:"white",
  },
  buttonView:{
   // flex:1,
    alignItems: "center",
  },
  buttonText:{
    color:"darkslateblue",
    textAlign: "center",
    fontWeight: "bold",
    fontSize:16,
    marginLeft:"25%",
   
  },
  footerTitle:{
    marginTop:"5%",
    fontSize:16,
    color:"white",
    textAlign: "center",
  }
});

export default Login;
