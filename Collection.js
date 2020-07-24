import React, {useState, useEffect} from 'react';
import Images from './assets/images/ImageLoader';
import styled from '@emotion/native';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Image, Text} from "react-native";

import {useFonts} from '@expo-google-fonts/inter';

import {CraftyGirls_400Regular } from '@expo-google-fonts/crafty-girls'
export default function Collection() {

    const ColoredView = styled.View`
        background-color: white;
        height: 100%;
    `;
    const BasicView = styled.View`
        display: flex;
        align-items: center;
        height:90%;
        width:100%;
        justify-content: center;
    `;

    const MainTitle = styled.Text`
        font-size: 40px;
        margin: 5px auto;
        color: #e74c3c;
    `;

    const [images, setimages] = useState([]);
    async function Transi() {
        var longueur = Images.length;
        for (var i =0; i< longueur;i++) {
            try {
                var name = await AsyncStorage.getItem(Images[i].name)
                if (name !== null) {
                    setimages(images => [...images,Images[i].image])
                }
            }
            catch(err) {
                console.log(err)
            }
        }
    }
    useEffect(() => {
        Transi();
        return () => {
            console.log("This will be logged on unmount");
          }
    },[])

    let [fontsLoaded] = useFonts({
        CraftyGirls_400Regular ,
      });
    
      if (!fontsLoaded) {
        return (
            <View><Text>attends</Text></View>
        )
      }

    console.log(images)
    return (
        <ColoredView>
            <MainTitle style={{fontFamily: 'CraftyGirls_400Regular'}}>Angela Collection</MainTitle>
            <BasicView>
                {
                    images.map((image) => {
                        return (
                            <Image 
                                key={image}
                                source={image}
                                style={{
                                width: 500,
                                height: 500,
                                flex: 1,
                                alignSelf: 'center'}}
                                resizeMode="contain">
                            </Image>
                )
            })}
            </BasicView>
        </ColoredView>
    );
}
