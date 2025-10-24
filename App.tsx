import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator'; 

const App: FC = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;
