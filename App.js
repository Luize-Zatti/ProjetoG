import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BemVindo from './src/components/pages/BemVindo';
import Exercicios from './src/components/pages/Exercicios';
import Agachamento from './src/components/pages/Agachamento';
import AbdominalB from './src/components/pages/AbdominalBorboleta';
import Skipping from './src/components/pages/Skipping';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bem Vindo" component={BemVindo} options={{ headerShown: false }} />
      <Stack.Screen name="Exercicios" component={Exercicios} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Agachamento" component={Agachamento} />
      <Drawer.Screen name="Abdominal Borboleta" component={AbdominalB} />
      <Drawer.Screen name="Skipping" component={Skipping} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}