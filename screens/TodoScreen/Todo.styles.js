import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 10,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  scrollableList: {
    paddingTop: 15
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  }
});
export default styles;