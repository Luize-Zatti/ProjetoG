import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Agachamento from '../../pages/Agachamento';
import Skipping from '../../pages/Skipping';
import AbdominalB from '../../pages/AbdominalBorboleta';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: "black",
      drawerActiveTintColor: "black",
      drawerLabelStyle: {
        marginLeft: -20,
      }}}>
        <Drawer.Screen name="Agachamento" component={Agachamento} />
        <Drawer.Screen name="Skipping" component={Skipping} />
        <Drawer.Screen name="Abdominal Borboleta" component={AbdominalB}/>
      </ Drawer.Navigator>
      );
}