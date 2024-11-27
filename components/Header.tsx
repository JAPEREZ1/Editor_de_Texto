import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Text Editor</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => alert('Nuevo documento')}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Guardado!')}>
          <MaterialIcons name="save" size={24} color="white" style={{ marginLeft: 16 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
});

export default Header;
