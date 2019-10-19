import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    paddingTop: 30
  },
  headerContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  header: { 
    marginTop: 0, 
    marginLeft: 60 
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default styles;