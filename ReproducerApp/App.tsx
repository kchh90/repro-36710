/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const TestScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <Button
        title={'Click me'}
        onPress={() => {
          console.log(Date.now());
        }}></Button>
    </SafeAreaView>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
