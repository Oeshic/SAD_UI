// (1/3) Including this import in order to add screen navigating feature
import 'react-native-gesture-handler';

// Default imports
// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// Screen function imports
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import Test1 from './Screens/Test1';
import Test2 from './Screens/Test2';
// import ScreenNavigation from './Screens/LoginScreen';

// (2/3) Including this import in order to add screen navigating feature
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName = 'WelcomeScreen'
    >
      <Stack.Screen name='WelcomeScreen' compnonent={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" compnonent={LoginScreen} />
      {/* <Stack.Screen name="Test1" compnonent={Test1} />
      <Stack.Screen name="Test2" compnonent={Test2} />       */}
    </Stack.Navigator>
  );
};


export default function App() {
  return (
// (3/3) Including this import in order to add screen navigating feature
    <NavigationContainer>
      {/* <Stack.Navigator> */}

    {/* <WelcomeScreen
      name="WelcomeScreen"
      compnonent={WelcomeScreen}
      options={{ title: 'Welcome'}}
    /> */}
    {/* <LoginScreen
      name="LoginScreen"
      compnonent={LoginScreen}
    /> */}
      <MyStack />

      {/* </Stack.Navigator> */}
    </NavigationContainer>


  );
}



