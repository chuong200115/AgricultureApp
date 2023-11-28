import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F1F1F1'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    marginTop: 25,
    height: 50,
  },
  menuIcon: {
    

  },
  menuIconArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  theoDoiCayTrongArea: {
    flex: 6,
    justifyContent: 'center',

  },
  theoDoiCayTrong: {
    fontSize: 22,

  },
  monitorLinechartBg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    width: 330,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  monitorLinechartBgArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tempChart: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nhietDo: {
    fontWeight: 'bold'
  }
})

export default styles