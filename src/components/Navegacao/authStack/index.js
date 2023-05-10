import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BemVindo from "../../pages/BemVindo";
import Exercicios from "../../pages/Exercicios";
import Agachamento from "../../pages/Agachamento";
import Skipping from "../../pages/Skipping";
import AbdominalB from "../../pages/AbdominalBorboleta";
import DrawerNavigator from "../Drawer";


const Stack = createNativeStackNavigator();

export default function  AuthNavigator() {
  return (
      <Stack.Navigator >
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }} />
        <Stack.Screen name="Exercicios" component={Exercicios} options={({route}) => ({
        headerTintColor: "#575454",
        // headerBackTitle: 'Back',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#ecf0f1',
        },
      })}/>
        <Stack.Screen name="Agachamento" component={Agachamento} />
        <Stack.Screen name="Skipping" component={Skipping} />
        <Stack.Screen name="Abdominal Borboleta" component={AbdominalB}/>
        <Stack.Screen name="Drawer" component={DrawerNavigator}/>
      </Stack.Navigator>
  );
}