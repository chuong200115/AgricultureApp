import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    height: 36,
    width: 48,
    backgroundColor: '#53d6f2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  even: {
    backgroundColor: '#55f253',
  },
  odd: {
    backgroundColor: '#53d6f2',
  },
  number: {
    fontWeight: 16,    
    color: '#fff',
  },
  content: {
    fontSize: 16,
    width: '80%'
  }
})

export default styles