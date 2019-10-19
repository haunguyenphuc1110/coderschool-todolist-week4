import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Input from '../Input/Input.component';
import styles from './Modal.styles';
import SubTitle from '../SubTitle/SubTitle.component';
import COLORS from '../../constants/Colors';

const CustomModal = (props) => {
  const { 
    modalVisible,
    hideModal,
    editItem,
    inputValue,
    onChangeText
  } = props;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <SubTitle 
            titleStyle={styles.subTitle} 
            subTitle={"Edit work"} 
            textStyle={styles.title}/>
          <View style={styles.inputContainer}>
            <Input
              placeholder={"Edit your work"}
              inputStyle={styles.input}
              inputValue={inputValue}
              onChangeText={onChangeText}
            />
          </View> 
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={editItem}
                style={styles.edit}>
                <Text style={styles.label}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={hideModal}
                style={styles.cancel}>
                <Text style={styles.label}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>  
        </View>
      </View>
    </Modal>
  );
}
export default CustomModal;