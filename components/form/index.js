import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import styles from './style'

const Form = (prop) => {
  const [task, setTask] = useState('')

  handleAddTask = () => {
    if(task === ''){
     alert('nhap task vao ne')
     return false;
    }
    prop.onAddTask(task);
    setTask('')
    Keyboard.dismiss();
  }
  

  return (
    <View style={styles.addTask}>
      <TextInput
        style={styles.input}
        placeholder='type a task'        
        onChangeText={(text) => setTask(text)}
        value={task}
      />
      <View>
        <TouchableOpacity
          onPress={handleAddTask}
        >
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Form 