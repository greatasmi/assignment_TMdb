import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator'; 
import { ThemeProvider } from './src/constant/themes/useTheme';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
