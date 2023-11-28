import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Task = (props) => {
  const numberBackground = props.number % 2 ===0 ? styles.even : styles.odd
  return (
    <TouchableOpacity
      onPress={props.onDeleteTask}
    >
      <View style={styles.item}>
        <View style={[styles.square, numberBackground]}>
          <Text style={styles.number}>{props.number}</Text>
        </View>
        <Text style={styles.content}>{props?.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Task