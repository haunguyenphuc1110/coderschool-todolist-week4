import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Todo.styles';
import COLORS from '../../constants/Colors';

import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
class TodoScreen extends React.Component {

  state = {
    inputValue: ''
  };
  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.PRIMARY_START, COLORS.PRIMARY_END]}
          style={styles.container}
        >
          <View style={styles.centered}>
            <Header title={'Todo'} />
          </View>
          <View style={styles.inputContainer}>
            <Input inputValue={inputValue} onChangeText={this.newInputValue} />
          </View>
        </LinearGradient>
      </View>
    );
  };
}

TodoScreen.navigationOptions = {
  header: null
};

export default TodoScreen;