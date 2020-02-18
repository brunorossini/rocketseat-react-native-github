import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './pages/Main';
import UserScreen from './pages/User';

const Stack = createStackNavigator();

const options = {
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  headerStyle: { backgroundColor: '#7159c1' },
  headerTintColor: '#fff',
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={navigation => {
            return {
              title: navigation.route.params.user.name,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
