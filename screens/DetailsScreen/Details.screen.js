import React from 'react';
import { 
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Details.styles';
import COLORS from '../../constants/Colors';
import Header from '../../components/Header/Header.component';
import SubTitle from '../../components/SubTitle/SubTitle.component';
const  DetailsScreen = (props) => {

  const { getParam, goBack } = props.navigation;
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.DETAIL_START, COLORS.DETAIL_END]}
        style={styles.main}>
          <View style={styles.header}>
            <Ionicons
              size={30}
              color={COLORS.WHITE}
              name={'ios-arrow-dropleft'}
              onPress={() => goBack()}
            />
            <Header title={'Todo Details'} headerStyle={{ marginTop: 0, marginLeft: 60 }}/>
          </View>
        
        <View style={styles.centered}>
          <SubTitle subTitle={getParam('todo')} textStyle={{fontSize: 30}} />
          <SubTitle subTitle={getParam('date')}/>
          <SubTitle subTitle={getParam('status')} textStyle={{color: COLORS.CIRCLE_ACTIVE}}/>
        </View>   
      </LinearGradient>
    </View>
  );
}

DetailsScreen.navigationOptions = {
  header: null
};

export default DetailsScreen;