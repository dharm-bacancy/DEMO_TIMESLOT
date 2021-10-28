import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {
  screenOptions as HomeScreenOption,
} from '../screens/Home/HomeScreen';
import TimeSlotScreen, {
  screenOptions as TimeSlotScreenOption,
} from '../screens/TimeSlot/TimeSlotScreen';

const stack = createStackNavigator();

const MyAppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={HomeScreenOption}
        />
        <stack.Screen
          name="TimeSlot"
          component={TimeSlotScreen}
          options={TimeSlotScreenOption}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MyAppNavigator;
