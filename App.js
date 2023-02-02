import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './.expo/src/home.js';
import Registraion from './.expo/src/Registration.js';
import Login from './.expo/src/Login.js';
import Forget from './.expo/src/Forget.js';
import Otpf from "./.expo/src/Otpf.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={Registraion} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Otpf" component={Otpf}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
