import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from '../Drawer';
import BemVindo from '../../pages/BemVindo';
import Exercicios from '../../pages/Exercicios';
import AbdominalB from '../../pages/AbdominalBorboleta';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={BemVindo}>
      <Stack.Screen
        name={"Exercicios"}
        component={Exercicios}
        options={({route}) => ({
          headerTintColor: "white",
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "blue",
          },
        })}
      />

      <Stack.Screen
        name={"Bem Vindo"}
        component={BemVindo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={"Abdominal Borboleta"}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;