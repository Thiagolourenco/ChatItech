import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalArea: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    flex: 1,
  },
  modalBody: {
    backgroundColor: '#fff',
    opacity: 1,
    margin: 5,
    borderRadius: 5,
    minHeight: 100,
  },
  titleArea: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 100,
    color: '#4c4c4c',
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    paddingBottom: 5,
  },
  checkBoxBotao: {
    flexDirection: 'row',
    backgroundColor: '#40aba5', // #40aba5
    borderWidth: 1,
    borderColor: '#fff',
    margin: 5,
    padding: 5,
    height: 40,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  itemText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 2,
  },
  botaoIniciarConversa: {
    backgroundColor: '#4e73de', // #4b87b9
    margin: 5,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  textBotaoIniciarConversa: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
