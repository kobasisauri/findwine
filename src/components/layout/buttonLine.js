import React from 'react';
import { Box } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2B2731',
    marginBottom: 5,
    height: 5,
    width: 135,
    borderRadius: 5,
  },
});

export default function ButtonLine() {
  return (
    <Box style={styles.container} />
  );
}
