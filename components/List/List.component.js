import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  CheckBox
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../constants/Colors';
import styles from './List.styles';
class List extends Component {
  onToggleCircle = () => {
    const { isCompleted, id, completeItem, incompleteItem } = this.props;
    if (isCompleted) {
      incompleteItem(id);
    } else {
      completeItem(id);
    }
  };
  render() {
    const { text, deleteItem, id, isCompleted, showModalEdit, disabled } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.column}>
          <CheckBox
            value={isCompleted}
            onChange={this.onToggleCircle}
            disabled={disabled}/>
          <Text
            style={[
              styles.text,
              isCompleted
                ? {
                    color: COLORS.ITEM_LIST_TEXT_STRIKE,
                    textDecorationLine: 'line-through'
                  }
                : { color: COLORS.ITEM_LIST_TEXT }
            ]}
          >
            {text}
          </Text>
        </View>
        {!disabled 
          ? isCompleted 
            ? (<View style={styles.button}>
                <MaterialIcons
                  name="delete-forever"
                  size={24}
                  color={COLORS.DELETE_ICON_COLOR}
                  onPress={() => {
                    !disabled && deleteItem(id);
                  }}
                />
              </View>) 
            : (<View style={styles.button}>
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={COLORS.EDIT_ICON_COLOR}
                  onPress={() => showModalEdit(id)}
                />
              </View>)
          : <View/>}
      </TouchableOpacity>
    );
  }
}
List.defaultProps = {
  disabled: false
};
export default List;