import React, {useEffect} from "react";
import {View, Text, YellowBox} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from '@emotion/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import Ionicons from "@expo/vector-icons/Ionicons";
import * as firebase from "firebase";
import "firebase/firestore";

import Collection from './Collection'
import Index from './MainPage';

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

const BasicView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

function Test1() {
    return (
        <BasicView>
            <Text> welthl</Text>
        </BasicView>
    );
}

const Tab = createBottomTabNavigator();
export default function App() {
    return (
      <>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({color,size}) => {
                    if (route.name === 'Collection') {
                        return <MaterialIcons name="collections" size={size} color={color} />
                    } else if (route.name === "Cadeau du jour") {
                        return <AntDesign name="gift" size={size} color={color} />
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: '#e74c3c',
                  inactiveTintColor: 'gray',
                }}
              >
                <Tab.Screen name="Cadeau du jour" component={Index} />
                <Tab.Screen name="Collection" component={Collection} />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    );
}
