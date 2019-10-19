import React from 'react';
import { 
  View,
  ActivityIndicator,
  ScrollView,
  AsyncStorage 
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import uuid from 'uuid/v1';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Complete.styles';
import COLORS from '../../constants/Colors';

import Header from '../../components/Header/Header.component';
import Input from '../../components/Input/Input.component';
import List from '../../components/List/List.component';
import SubTitle from '../../components/SubTitle/SubTitle.component';
import Button from '../../components/Button/Button.component';
class CompleteScreen extends React.Component {

  constructor(props) {
    super(props);
    props.navigation.setParams({
      onTabFocus: this.handleTabFocus
    });
    this.state = {
      inputValue: '',
      loadingItems: false,
      allItems: {},
      isCompleted: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.loadingItems();
    }
  }

  componentDidMount() {
    this.loadingItems();
  };

  newInputValue = value => {
    this.setState({
      inputValue: value
    });
  };

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
    const { inputValue, loadingItems, allItems } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.COMPLETE_START, COLORS.COMPLETE_END]}
          style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            <View style={styles.centered}>
              <Header title={'Complete'} />
            </View>
            <View style={styles.inputContainer}>
              <SubTitle subTitle={"What are completed?"} />
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
              {loadingItems ? (
                Object.values(allItems)
                  .reverse()
                  .map(item => (
                    <List
                      key={item.id}
                      {...item}
                      deleteItem={this.deleteItem}
                      completeItem={this.completeItem}
                      incompleteItem={this.incompleteItem}
                      disabled={false}
                    />
                  ))
              ) : (
                <ActivityIndicator size="large" color="white" />
              )}
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
}

CompleteScreen.navigationOptions = {
  header: null
};

export default withNavigationFocus(CompleteScreen);