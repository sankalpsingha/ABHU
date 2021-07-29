import React from 'react';
import {View} from 'react-native';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={Login}
              />
              <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

const style = {
  container: {
    flex: 1,
  }
};

export default App;