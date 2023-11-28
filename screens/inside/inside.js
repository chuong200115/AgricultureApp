import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Task from '../../components/task/index';
import Form from '../../components/form/index';
import styles from '../../app.components.style';

const inside = () => {
  // const navigation = useNavigation();

  const [taskList, setTaskList] = useState([]);

  const handleAddTask2 = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const handleDeleteTask = (index) => {
    Alert.alert('Alert Title', 'Ban co muon xoa', [
      {
        text: 'OK',
        onPress: () => {
          taskList.splice(index, 1);
          setTaskList([...taskList]);
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}> Todo List </Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                title={item}
                key={index}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>

      <Form onAddTask={handleAddTask2} />
    </View>
  );
};

export default inside;
