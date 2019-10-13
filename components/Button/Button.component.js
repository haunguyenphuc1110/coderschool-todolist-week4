import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Button.styles';
export default function TabBarIcon(props) {
  return (
    <MaterialIcons
      onPress={props.deleteAllItems}
      name={props.name}
      size={26}
      color={props.color}
      style={styles.button}/>
  );
}
