import React from 'react';
import { TextInput } from 'react-native';
import COLORS from '../../constants/Colors';
import styles from './Input.styles';
const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Type here to add note."
    placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={'white'}
    maxLength={30}
    autoFocus={true}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);
export default Input;