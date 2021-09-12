import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import * as Speech from "expo-speech";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.head}>Text to speech converter</Text>
        </View>
        <Image
          source={require("./logo.png")}
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            marginTop: 20,
          }}
        />
        <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 20 }}>
          Enter a word
        </Text>
        <TextInput
          onChangeText={(data) => {
            this.setState({
              text: data,
            });
          }}
          value={this.state.text}
          style={styles.inputText}
        ></TextInput>
        <Button
          title="Click Here to hear speech"
          color="#00B8C0"
          onPress={() => {
            this.state.text === ""
              ? alert("Please Enter a word")
              : Speech.speak(this.state.text);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#00B8C0",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    fontSize: 20,
  },
  inputText: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    height: 30,
    marginTop: 20,
    marginBottom: 20,
  },
});
