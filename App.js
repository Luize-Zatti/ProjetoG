import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from "./src/components/Navegacao/authStack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <AuthNavigator/>
    </NavigationContainer>
  );
}