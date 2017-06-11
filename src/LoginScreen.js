import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CLIENT_ID, DOMAIN } from "react-native-dotenv";

var Auth0Lock = require("react-native-lock");
var lock = new Auth0Lock({
  clientId: CLIENT_ID,
  domain: DOMAIN
});

export default class LoginScreen extends Component {
  showAuthScreen = () => {
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log("Logged in with Auth0!");
    });
  };

  componentWillMount = () => {
    this.showAuthScreen();
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
