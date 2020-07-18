import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, YellowBox, Image } from "react-native";
import { Global } from "@emotion/core";
import ImageContainer from "./ImageContainer";
import { ThemeProvider, withTheme } from "emotion-theming";
import styled, { css } from "@emotion/native";
import { MeriendaOne_400Regular } from "@expo-google-fonts/merienda-one";
import { useFonts } from "@expo-google-fonts/inter";
import * as firebase from "firebase";
import "firebase/firestore";

YellowBox.ignoreWarnings(["Remote debugger"]);

var firebaseConfig = {
  apiKey: "AIzaSyAuCac_PqFYvWbTEB24UCsSfSp5kqblRCw",
  authDomain: "angela-birthday.firebaseapp.com",
  databaseURL: "https://angela-birthday.firebaseio.com",
  projectId: "angela-birthday",
  storageBucket: "angela-birthday.appspot.com",
  messagingSenderId: "47831012512",
  appId: "1:47831012512:web:0ff81257aec4615981a5c5",
  measurementId: "G-7J40HFKJ8B",
};
// Initialize Firebase
export default function App() {
  const [showButton, setshowButton] = useState(true);
  const imageList = ["test.png","test2.jpg"];
  const [image, setimage] = useState(imageList[0]);
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    return () => {};
  }, [firebase]);

  async function triggerImage() {
      var longueur = imageList.length;
      var index = Math.floor(Math.random() * longueur); 
      setimage(imageList[index]) 
      setshowButton(!showButton)
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 28 }}>Angela App</Text>
        {!showButton === true ? (
          <View>
            <Image style={{ width: 300, height: 450 }} source={require(`./assets/${image}`)}></Image>
            <Button
              onPress={triggerImage}
              title="retour"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        ) : (
          <Button
            onPress={() => setshowButton(!showButton)}
            title="DECOUVRE TON CADEAU"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  appButton: {
    borderRadius: 15,
    fontSize: 15,
    backgroundColor: "red",
    color: "white",
  },
});
