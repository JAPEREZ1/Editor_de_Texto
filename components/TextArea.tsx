import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextArea: React.FC<{ backgroundColor: string; fontFamily: string }> = ({
  backgroundColor,
  fontFamily,
}) => {
  return (
    <TextInput
      style={[styles.textArea, { backgroundColor, fontFamily }]}
      placeholder="Start typing..."
      multiline
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#000',
  },
});

export default TextArea;
