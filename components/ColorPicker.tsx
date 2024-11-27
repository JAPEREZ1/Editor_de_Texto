import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff', '#800080'];

const ColorPicker: React.FC<{ onSelect: (color: string) => void }> = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[styles.circle, { backgroundColor: color }]}
          onPress={() => onSelect(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default ColorPicker;
