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
    const { item, completeItem, incompleteItem } = this.props;
    if (item.isCompleted) {
      incompleteItem(item.id);
    } else {
      completeItem(item.id);
    }
  };
  render() {
    const { 
      item,
      deleteItem, 
      id, 
      showModalEdit, 
      disabled, 
      onOpenDetails,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.column} onPress={() => onOpenDetails(item)}>
          <CheckBox
            value={item.isCompleted}
            onChange={this.onToggleCircle}
            disabled={disabled}/>
          <Text
            style={[
              styles.text,
              item.isCompleted
                ? {
                    color: COLORS.ITEM_LIST_TEXT_STRIKE,
                    textDecorationLine: 'line-through'
                  }
                : { color: COLORS.ITEM_LIST_TEXT }
            ]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
        {!disabled 
          ? item.isCompleted 
            ? (<View style={styles.button}>
                <MaterialIcons
                  name="delete-forever"
                  size={24}
                  color={COLORS.DELETE_ICON_COLOR}
                  onPress={() => deleteItem(item.id)}
                />
              </View>) 
            : (<View style={styles.button}>
                <MaterialIcons
                  name="edit"
                  size={24}
                  color={COLORS.EDIT_ICON_COLOR}
                  onPress={() => showModalEdit(item.id)}
                />
              </View>)
          : <View/>}
      </View>
    );
  }
}
List.defaultProps = {
  disabled: false
};
export default List;