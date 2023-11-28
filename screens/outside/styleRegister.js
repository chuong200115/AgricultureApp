import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoIcon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
      dangNhap: {
        fontSize: 25,
        marginTop: 5,
        // fontWeight: 'bold'
      },
      inputArea: {
        // flex: 1,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 10
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      haveAnAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
      },
      signinButton: {
        color: 'blue'
      }
})

export default styles