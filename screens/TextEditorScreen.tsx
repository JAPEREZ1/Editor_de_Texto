import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TextArea from '../components/TextArea';
import ColorPicker from '../components/ColorPicker';
import FontPicker from '../components/FontPicker';

const TextEditorScreen: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffcc');
  const [fontFamily, setFontFamily] = useState('sans-serif');

  return (
    <View style={styles.container}>
      <Header />
      <TextArea backgroundColor={backgroundColor} fontFamily={fontFamily} />
      <ColorPicker onSelect={setBackgroundColor} />
      <FontPicker selectedFont={fontFamily} onSelect={setFontFamily} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});

export default TextEditorScreen;
