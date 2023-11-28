import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  addTask: {
    bottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    height: 44,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#21a3d0',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  addButton:{
    width: 44,
    height: 44,
    backgroundColor: '#21a3d0',
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    
  }
})

export default styles