import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },  
  modal: {
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height: 250, 
    marginHorizontal: 20,
    marginVertical: 150,
    borderWidth: 2,
    borderColor: COLORS.LIGHT_GRAY,
    padding: 20,
    backgroundColor: COLORS.LIGHT_WHITE, 
    borderRadius: 20,
    elevation: 100
  },
  subTitle: {
    flex: 1,
    marginTop: 10
  },
  title: {
    color: COLORS.BLACK
  },  
  inputContainer: {
    flex: 1
  },
  input: { 
    color: COLORS.BLACK,
    width: 300, 
    fontSize: 16, 
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  edit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
    width: 100,
    height: 40,
    borderRadius: 10,
    elevation: 5
  },
  cancel: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.CIRCLE_INACTIVE,
    width: 100,
    height: 40,
    borderRadius: 10,
    elevation: 5
  },
  text: {
    fontWeight: '500'
  }
});
export default styles;