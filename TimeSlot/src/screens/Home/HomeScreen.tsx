import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import TimeSlotScreen from '../TimeSlot/TimeSlotScreen';

const HomeScreen: FC = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello World</Text>
      <Button
        title="Select Time Slot"
        onPress={() => {
          props.navigation.navigate('TimeSlot');
        }}
      />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    fontSize: 30,
  },
});

export default HomeScreen;
