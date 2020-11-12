import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import ScreenUm from './src/screens/TransitionScreens/Apresentacao/ScreenUm';
import ScreenDois from './src/screens/TransitionScreens/Apresentacao/ScreenDois';
import ScreenTres from './src/screens/TransitionScreens/Apresentacao/ScreenTres';
import CadastroCliente from './src/screens/Cadastro/CadastroCliente';
import CadastroTecnico from './src/screens/Cadastro/CadastroTecnico';
import PrimeiroLoginTecnico from './src/screens/TransitionScreens/PrimeiroLoginTecnico';
import ProfileCliente from './src/screens/ProfileCliente/ProfileCliente';

const Stack = createStackNavigator();

class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          {/* <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="ScreenUm" component={ScreenUm}/>
          <Stack.Screen name="ScreenDois" component={ScreenDois}/>
          <Stack.Screen name="ScreenTres" component={ScreenTres}/>
          <Stack.Screen name="CadastroCliente" component={CadastroCliente}/>
          <Stack.Screen name="CadastroTecnico" component={CadastroTecnico}/> */}
          <Stack.Screen name="ProfileCliente" component={ProfileCliente}/>
          <Stack.Screen name="PrimeiroLoginTecnico" component={PrimeiroLoginTecnico}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;