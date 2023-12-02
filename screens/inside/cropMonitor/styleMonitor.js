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
  },
  soilArea: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
  },
  nitrogenArea: {
    height: 110,
    width: 110,
    borderColor: '#fff',
    borderWidth: 7,
    backgroundColor: '#A8FAF4',
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photphorusArea: {
    height: 110,
    width: 110,
    borderColor: '#fff',
    borderWidth: 7,
    backgroundColor: '#a5d2f5',
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kaliArea: {
    height: 110,
    width: 110,
    borderColor: '#fff',
    borderWidth: 7,
    backgroundColor: '#a2aaf5',
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soilText: {
    marginVertical: 5,
    fontWeight: 'bold'
  },
  electricArea: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
  },
  elecConducArea: {
    height: 110,
    width: 170,
    borderColor: '#fff',
    borderWidth: 5,
    backgroundColor: '#bccdf8',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  potenHydroArea: {
    height: 110,
    width: 170,
    borderColor: '#fff',
    borderWidth: 5,
    backgroundColor: '#a1e3d9',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles
