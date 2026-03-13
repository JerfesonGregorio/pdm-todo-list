import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TaskInput from '@/componentes/TaskInput';
import TaskItem from '@/componentes/TaskItem';

export default function index() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <TaskInput onAddTask={handleAddTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TaskItem 
            task={item} 
            onRemove={handleRemoveTask} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});