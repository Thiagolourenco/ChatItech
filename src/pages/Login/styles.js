import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b6b6b6',
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#C6c6c7',
    width: 320,
    paddingLeft: 10,
    marginTop: 20,
  },
  btn: {
    height: 50,
    width: 300,
    backgroundColor: '#c6c6c6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
