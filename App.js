import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BemVindo from './src/components/pages/BemVindo';
import Exercicios from './src/components/pages/Exercicios';
import Agachamento from './src/components/pages/Agachamento';
import Skipping from './src/components/pages/Skipping';
import AbdominalB from './src/components/pages/AbdominalBorboleta';
import Ponte from './src/components/pages/Ponte';
import AgachamentocSalto from './src/components/pages/AgachamentocSalto';
import Triceps from './src/components/pages/triceps';
import Salto from './src/components/pages/Salto';
import Prancha from './src/components/pages/prancha';
import Panturrilha from './src/components/pages/Panturrilha';
import AgachamentoIso from './src/components/pages/AgachamentoIsometrico';
import Polichinelo from './src/components/pages/Polichinelo';
import Avanco from './src/components/pages/Avanco';
import Mobilidade from './src/components/pages/MobilidadeEscapula';
import Referencias from './src/components/pages/Referencias';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bem Vindo" component={BemVindo} options={{ headerShown: false }} />
      <Stack.Screen
  name="Exercicios"
  component={Exercicios}
  options={{
    headerTitleAlign: "center",
    headerBackVisible: false,
    headerStyle: {     
      backgroundColor:"#ADD8E6",
    },
  }}
/>
    </Stack.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Agachamento" component={Agachamento} />
      <Drawer.Screen name="Skipping" component={Skipping} />
      <Drawer.Screen name="Abdominal Borboleta" component={AbdominalB} />
      <Drawer.Screen name="Ponte" component={Ponte} />
      <Drawer.Screen name="Agachamento com Salto" component={AgachamentocSalto} />
      <Drawer.Screen name="Tríceps no Banco" component={Triceps} />
      <Drawer.Screen name="Salto com corda" component={Salto} />
      <Drawer.Screen name="Prancha" component={Prancha} />
      <Drawer.Screen name="Panturrilha em pé" component={Panturrilha} />
      <Drawer.Screen name="Agachamento isométrico" component={AgachamentoIso} />
      <Drawer.Screen name="Polichinelo" component={Polichinelo} />
      <Drawer.Screen name="Avanço" component={Avanco} />
      <Drawer.Screen name="Mobilidade de Escápula" component={Mobilidade} />
      <Drawer.Screen name="Referências" component={Referencias} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}