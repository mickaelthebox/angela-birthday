
import React, {useState,useEffect} from 'react';
import styled from '@emotion/native';
import Images from './assets/images/ImageLoader';
import {View, Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { useFonts} from '@expo-google-fonts/inter';
import {CraftyGirls_400Regular} from '@expo-google-fonts/crafty-girls';

export default function Index() {
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
    const MainImage = styled.Image`

    `;
    const MainButton = styled.TouchableOpacity`
        align-self: center;
        padding: 20px;
        margin: 10px;
        background-color: #e74c3c;
    `;
    const ButtonText = styled.Text`
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        font-size: 20px;
    `;
    const MainTitle = styled.Text`
        font-size: 40px;
        margin: 5px auto;
        color: #e74c3c;
    `;
    const [showButton, setshowButton] = useState(true);
    const [clickedButton, setclickedButton] = useState(false);
    const [image, setimage] = useState(Images[0].image);

    async function handleDiscover()  {
        setshowButton(!showButton)
        var index = Math.floor(Math.random() * 2); 
        setimage(Images[index].image);
        console.log(Images[index])
        try {
            const jsonValue = JSON.stringify(Images[index].image)
            await AsyncStorage.setItem(Images[index].name, jsonValue)
        } catch (e) {
            console.log(e)
        }
    }


    /*async function Transi() {
        try {
            var timerStored = await AsyncStorage.getItem("timer")
            if (timerStored <= Date.now()) {
                setclickedButton(true)
            }
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        {
            
            return () => {
                console.log("?")
            }
        }    
    })*/

    let [fontsLoaded] = useFonts({
        CraftyGirls_400Regular ,
      });
    
      if (!fontsLoaded) {
        return (
            <View><Text>attends</Text></View>
        )
      }
    
    


    return (
        <ColoredView>
            <MainTitle style ={{fontFamily: 'CraftyGirls_400Regular'}}>AngeLife</MainTitle>
            <BasicView>
                {(!showButton) ? (
                    <BasicView>
                        <MainImage 
                            source={image}
                            style={{
                                width: undefined,
                                height: undefined,
                                flex: 1,
                                alignSelf: 'stretch'}}
                                resizeMode="contain"></MainImage>
                            <MainButton
                                onPress={() => setshowButton(!showButton)}>
                                <ButtonText>retour</ButtonText>
                            </MainButton>
                    </BasicView>
                ) : (
                    <MainButton
                        onPress={handleDiscover}
                        >
                        <ButtonText>découvre ton cadeau !</ButtonText>
                    </MainButton>
                )}
            </BasicView>
        </ColoredView>
    );
}
