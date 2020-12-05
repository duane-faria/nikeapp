import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './screens';
import { COLORS, FONTS, icons, SIZES } from './constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'SNEAKERS',
        headerTitleAlign: 'center',
        headerTintColor: COLORS.lightGray,
        headerTitleStyle: {
          ...FONTS.navTitle,
        },
        headerStyle: {
          elevation: 0,
        },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity
            onPress={onPress}
            style={{ marginLeft: SIZES.padding }}>
            <Image
              source={icons.menu}
              style={{ height: 25, width: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => console.log('right header pressionated')}
            style={{ marginRight: SIZES.padding }}>
            <Image
              source={icons.search}
              style={{ height: 25, width: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <>
      <NavigationContainer theme={theme}>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
