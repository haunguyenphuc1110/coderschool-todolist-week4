import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';
const Header = ({ title, headerStyle }) => (
  <View style={[styles.headerContainer, headerStyle]}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);

export default Header;