import React, {FC} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Color from '../../../constants/Color/Color';
const HeaderButton: FC = props => {
  return (
    <View style={styles.touchable}>
      <TouchableOpacity
        onPress={props.onArea}
        style={{...styles.area, ...props.area}}>
        <View style={{...styles.textView, ...props.area}}>
          <Text style={{...styles.buttonText, ...props.textArea}}>
            Area Details
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onTime} style={styles.area}>
        <View style={{...styles.textView, ...props.time}}>
          <Text style={{...styles.buttonText, ...props.textTime}}>
            Time Spots
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onTeam} style={styles.area}>
        <View style={{...styles.textView, ...props.team}}>
          <Text style={{...styles.buttonText, ...props.textTeam}}>
            Team Members
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Color.genralblue,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  textView: {
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Color.disbled,
    borderBottomWidth: 0.3,
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 4,
  },
});

export default HeaderButton;
