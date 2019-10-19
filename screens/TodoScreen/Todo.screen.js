import React from 'react';
import { 
  View,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import uuid from 'uuid/v1';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Todo.styles';
import COLORS from '../../constants/Colors';

import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
import List from '../../components/List/List.component';
import SubTitle from '../../components/SubTitle/SubTitle.component';
import Button from '../../components/Button/Button.component';
import CustomModal from '../../components/Modal/Modal.component';
class TodoScreen extends React.Component {

  state = {
    //Handle value in creating todo
    inputValue: '',

    loadingItems: false,
    allItems: {},
    isCompleted: false,
    modalVisible: false,

    //Handle value in editing todo
    editId: '',
    editValue: ''
  };

  componentDidMount() {
    this.loadingItems();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.loadingItems();
    }
  }

  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };

  onEditValue = value => {
    this.setState({
      editValue: value
    })
  }

  showModalEdit = (id) => {
    this.setState({
      modalVisible: true,
      editId: id
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  loadingItems = async () => {
    try {
      const allItems = await AsyncStorage.getItem('ToDos');
      this.setState({
        loadingItems: true,
        allItems: JSON.parse(allItems) || {}
      });
    } catch (err) {
      console.log(err);
    }
  };

  onNavigate = (item) => {
    this.props.navigation.navigate('Details', {
      todo: item.text,
      date: item.createdAt,
      status: item.isCompleted ? 'Completed' : 'Active'
    })
  };

  onDoneAddItem = () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      this.setState(prevState => {
        const id = uuid();
        const newItemObject = {
          [id]: {
            id,
            isCompleted: false,
            text: inputValue,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          inputValue: '',
          allItems: {
            ...prevState.allItems,
            ...newItemObject
          }
        };
        this.saveItems(newState.allItems);
        return { ...newState };
      });
    }
  };

  deleteItem = id => {
    this.setState(prevState => {
      const allItems = prevState.allItems;
      delete allItems[id];
      const newState = {
        ...prevState,
        ...allItems
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };

  completeItem = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allItems: {
          ...prevState.allItems,
          [id]: {
            ...prevState.allItems[id],
            isCompleted: true
          }
        }
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };

  editItem = () => {
    const { editValue, editId } = this.state;
    this.setState(prevState => {
      const newState = {
        ...prevState,
        editValue: '',
        editId: '',
        allItems: {
          ...prevState.allItems,
          [editId]: {
            ...prevState.allItems[editId],
            text: editValue
          }
        }
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    }, () => {
      this.setState({
        modalVisible: false
      })
    });
    alert('Edit successfully!');
  };

  incompleteItem = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        allItems: {
          ...prevState.allItems,
          [id]: {
            ...prevState.allItems[id],
            isCompleted: false
          }
        }
      };
      this.saveItems(newState.allItems);
      return { ...newState };
    });
  };

  deleteAllItems = async () => {
    try {
      await AsyncStorage.removeItem('ToDos');
      this.setState({ allItems: {} });
    } catch (err) {
      console.log(err);
    }
  };
  
  saveItems = newItem => {
    AsyncStorage.setItem('ToDos', JSON.stringify(newItem));
  };

  render() {
    const { inputValue, loadingItems, allItems, modalVisible, editValue } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <LinearGradient
          colors={[COLORS.PRIMARY_START, COLORS.PRIMARY_END]}
          style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            <View style={styles.centered}>
              <Header title={'Todo'} />
            </View>
            <View style={styles.inputContainer}>
              <SubTitle subTitle={"What's Next?"} />
              <Input 
                inputValue={inputValue} 
                onChangeText={this.newInputValue} 
                onDoneAddItem={this.onDoneAddItem}
                placeholder={"Type here to add note."}
                selectionColor={COLORS.WHITE}
                placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
              />
            </View>
            <View style={styles.list}>
              {(Object.keys(allItems).length > 0) && (
                <View style={styles.column}>
                  <SubTitle subTitle={'Recent Notes'} />
                  <Button
                    name={'delete-sweep'}
                    color={COLORS.LIGHTER_WHITE} 
                    deleteAllItems={this.deleteAllItems} />                 
                </View>)}
              {loadingItems 
                ? (Object.values(allItems)
                    .reverse()
                    .map(item => (
                      <List
                        key={item.id}
                        item={item}
                        deleteItem={this.deleteItem}
                        completeItem={this.completeItem}
                        incompleteItem={this.incompleteItem}
                        showModalEdit={this.showModalEdit}
                        onOpenDetails={this.onNavigate}
                      />
                    ))
                  ) 
                : (<ActivityIndicator size="large" color="white" />)
              }
            </View>
            <CustomModal
              modalVisible={modalVisible}
              hideModal={this.hideModal}
              editItem={this.editItem}
              inputValue={editValue} 
              onChangeText={this.onEditValue} />
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  };
}

TodoScreen.navigationOptions = {
  header: null
};

export default withNavigationFocus(TodoScreen);