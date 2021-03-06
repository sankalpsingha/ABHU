import React from 'react';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Report from './src/pages/Report';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { store } from './store';

const Stack = createStackNavigator();

const App = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: '#2F2F2F',
      elevation: 0,
    },
    headerTintColor: 'white',
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  options={
                    {
                      headerShown: false,
                    }
                  }
                  name="Login"
                  component={Login}
              />
              <Stack.Screen
                options={headerOptions}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={headerOptions}
                name="Report"
                component={Report}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const style = {
  container: {
    flex: 1,
  }
};

export default App;