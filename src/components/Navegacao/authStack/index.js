import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BemVindo from "./src/components/pages/BemVindo";
import Exercicios from "./src/components/pages/Exercicios";
import Agachamento from "./src/components/pages/Agachamento";
import Skipping from "./src/components/pages/Skipping";
import AbdominalB from "./src/components/pages/AbdominalBorboleta";

const Stack = createNativeStackNavigator();

export default function  AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BemVindo" component={BemVindo} options={{ headerShown: false }} />
        <Stack.Screen name="Exercicios" component={Exercicios} />
        <Stack.Screen name="Agachamento" component={Agachamento} />
        <Stack.Screen name="Skipping" component={Skipping} />
        <Stack.Screen name="Abdominal Borboleta" component={AbdominalB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}