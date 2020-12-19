import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../config';


const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: Colors.ThemeColors.Primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
