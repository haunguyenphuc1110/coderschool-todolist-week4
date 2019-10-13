import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
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
    const { text, deleteItem, id, isCompleted } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this.onToggleCircle}>
            <View
              style={[
                styles.circle,
                isCompleted
                  ? { borderColor: COLORS.CIRCLE_ACTIVE }
                  : { borderColor: COLORS.CIRCLE_INACTIVE }
              ]}
            />
          </TouchableOpacity>
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
        {isCompleted ? (
          <View style={styles.button}>
            <TouchableOpacity onPressOut={() => deleteItem(id)}>
              <MaterialIcons
                name="delete-forever"
                size={24}
                color={COLORS.DELETE_ICON_COLOR}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}
export default List;