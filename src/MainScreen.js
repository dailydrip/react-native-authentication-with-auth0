import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { CLIENT_ID, DOMAIN } from "react-native-dotenv";

var Auth0Lock = require("react-native-lock");
var lock = new Auth0Lock({
  clientId: CLIENT_ID,
  domain: DOMAIN
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { profile: {} };
  }
  showAuthScreen = () => {
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(profile);
      this.setState(profile);
      // Authentication worked!
      console.log("Logged in with Auth0!");
    });
  };

  componentWillMount = () => {
    this.showAuthScreen();
  };

  render() {
    const { name, nickname, picture } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{nickname}</Text>
        <Image style={styles.picture} source={{ uri: picture }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  picture: {
    width: 100,
    height: 100
  }
});
