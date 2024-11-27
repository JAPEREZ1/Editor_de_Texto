import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Nuevo import

const FontPicker: React.FC<{ selectedFont: string; onSelect: (font: string) => void }> = ({
  selectedFont,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedFont}
        onValueChange={(itemValue: string) => onSelect(itemValue)} // Tipo explícito
        style={styles.picker}
      >
        <Picker.Item label="Default" value="sans-serif" />
        <Picker.Item label="Serif" value="serif" />
        <Picker.Item label="Monospace" value="monospace" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default FontPicker;
