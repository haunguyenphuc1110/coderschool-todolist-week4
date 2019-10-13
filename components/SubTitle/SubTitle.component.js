import React from 'react';
import { View, Text } from 'react-native';
import styles from './SubTitle.styles';
const SubTitle = ({ subTitle }) => (
  <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{subTitle.toUpperCase()}</Text>
  </View>
);

export default SubTitle;