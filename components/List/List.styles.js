import { StyleSheet, Platform, Dimensions } from 'react-native';
import COLORS from '../../constants/Colors';
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 2,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 15
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    margin: 10
  },
  button: {
    marginRight: 10
  }
});
export default styles;