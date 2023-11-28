import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import AppNavigation from './navigation/navigation';

// const Stack = createStackNavigator();

function App() {
  return <AppNavigation />;
}

export default App;
