import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BemVindo from './src/components/pages/BemVindo';
import Exercicios from './src/components/pages/Exercicios';
import Agachamento from './src/components/pages/1-Agachamento';
import Skipping from './src/components/pages/2-Skipping';
import AbdominalB from './src/components/pages/3-AbdominalBorboleta';
import Ponte from './src/components/pages/4-Ponte';
import AgachamentocSalto from './src/components/pages/5-AgachamentocSalto';
import Triceps from './src/components/pages/6-triceps';
import Salto from './src/components/pages/7-Salto';
import Prancha from './src/components/pages/8-prancha';
import Panturrilha from './src/components/pages/9-Panturrilha';
import AgachamentoIso from './src/components/pages/10-AgachamentoIsometrico';
import Polichinelo from './src/components/pages/11-Polichinelo';
import Avanco from './src/components/pages/12-Avanco';
import Mobilidade from './src/components/pages/13-MobilidadeEscapula';

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
      <Drawer.Screen name="Mobilidade Escápula" component={Mobilidade} />
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