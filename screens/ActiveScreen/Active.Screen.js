import React from 'react';
import { 
  View,
  ActivityIndicator,
  ScrollView,
  AsyncStorage 
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './Active.styles';
import COLORS from '../../constants/Colors';
import Header from '../../components/Header/Header.component';
import List from '../../components/List/List.component';
import SubTitle from '../../components/SubTitle/SubTitle.component';
class ActiveScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingItems: false,
      allItems: {},
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

  loadingItems = async () => {
    try {
      const allItems = await AsyncStorage.getItem('ToDos');
      this.setState({
        loadingItems: true,
        allItems: allItems ? Object.values(JSON.parse(allItems)).filter(item => item.isCompleted === false) : {}
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { loadingItems, allItems } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.ACTIVE_START, COLORS.ACTIVE_END]}
          style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollableList}>
            <View style={styles.centered}>
              <Header title={'Active'} />
            </View>
            <View style={styles.inputContainer}>
              <SubTitle subTitle={"What are active?"} />
            </View>
            <View style={styles.list}>
              {(Object.keys(allItems).length > 0) 
                ? (<View style={styles.column}>
                    <SubTitle subTitle={'Recent Notes'} />          
                  </View>) 
                : (<SubTitle 
                    subTitle={"Nothing to show!"} 
                    titleStyle={{alignItems: 'center'}}
                  />)
              }
              {loadingItems ? (
                Object.values(allItems)
                  .reverse()
                  .map(item => (
                    <List
                      key={item.id}
                      {...item}
                      disabled={"true"}
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

ActiveScreen.navigationOptions = {
  header: null
};

export default withNavigationFocus(ActiveScreen);