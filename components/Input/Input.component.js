import React from 'react';
import { TextInput } from 'react-native';
import COLORS from '../../constants/Colors';
import styles from './Input.styles';
const Input = ({ 
  inputValue, 
  onChangeText, 
  onDoneAddItem, 
  inputStyle,
  placeholder,
  selectionColor,
  placeholderTextColor
}) => (
  <TextInput
    style={[styles.input, inputStyle]}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder= {placeholder}
    placeholderTextColor={placeholderTextColor}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={selectionColor}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);
export default Input;