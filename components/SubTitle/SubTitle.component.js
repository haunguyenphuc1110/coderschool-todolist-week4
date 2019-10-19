import React from 'react';
import { View, Text } from 'react-native';
import styles from './SubTitle.styles';
const SubTitle = ({ subTitle, titleStyle, textStyle }) => (
  <View style={[styles.subTitleContainer, titleStyle]}>
    <Text style={[styles.subTitle, textStyle]}>{subTitle.toUpperCase()}</Text>
  </View>
);

export default SubTitle;