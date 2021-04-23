import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#4c4c4c',
  },
  subTitle: {
    backgroundColor: '#00b6c9',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  textSubTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  conversaArea: {
    flex: 2,
    backgroundColor: '#fff',
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 2,
    padding: 6,
    width: '85%',
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#4c4c4c',
  },
  viewTextInput: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#fff',
  },
  botaoEnviar: {
    width: 60,
    height: 45,
    borderWidth: 1,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    borderRadius: 5,
    backgroundColor: '#40aba5',
    borderColor: '#fff',
    alignSelf: 'flex-end',
  },
  textBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
