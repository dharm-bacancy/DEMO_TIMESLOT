import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderButton from '../../components/Buttons/Header/HeaderButton';
import Color from '../../constants/Color/Color';
const TimeSlotScreen: FC = props => {
  const [selectedCat, setSelectedCat] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={styles.customButton}>
        <HeaderButton
          onArea={() => {
            setSelectedCat('area');
          }}
          area={{
            borderBottomColor:
              selectedCat === 'area' ? Color.genralblue : Color.transparent,
          }}
          textArea={{
            color: selectedCat === 'area' ? Color.genralblue : 'black',
          }}
          onTime={() => {
            setSelectedCat('time');
          }}
          time={{
            borderBottomColor:
              selectedCat === 'time' ? Color.genralblue : Color.transparent,
          }}
          textTime={{
            color: selectedCat === 'time' ? Color.genralblue : 'black',
          }}
          onTeam={() => {
            setSelectedCat('team');
          }}
          team={{
            borderBottomColor:
              selectedCat === 'team' ? Color.genralblue : Color.transparent,
          }}
          textTeam={{
            color: selectedCat === 'team' ? Color.genralblue : 'black',
          }}
        />
      </View>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  customButton: {
    marginTop: 80,
  },
});

export default TimeSlotScreen;
