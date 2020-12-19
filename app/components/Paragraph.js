import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../config';

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: Colors.ThemeColors.Primary,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(Paragraph);
