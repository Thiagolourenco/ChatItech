import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
      novaConversaBotao: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: '#40aba5',
        borderWidth: 1,
        borderColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
});

export default styles;