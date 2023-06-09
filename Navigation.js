import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ResetPass from './src/screens/ResetPass'
import React from 'react';

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login"
    useLegacyImplementation={true}
    screenOptions={{
      headerShown:false
      }}>
      <Stack.Screen name="Login" options={horizontalAnimation} component={Login} />
      <Stack.Screen name="Register" options={horizontalAnimation}  component={Register} />
      <Stack.Screen name="ResetPass" options={horizontalAnimation}  component={ResetPass} />
    </Stack.Navigator>
  );
}