import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import TaskInput from '@/componentes/TaskInput';
import TaskItem from '@/componentes/TaskItem';

export default function Index() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      ...taskData,
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    setTasks((prev) =>
      [...prev, newTask].sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        dateA.setHours(0, 0, 0, 0);
        dateB.setHours(0, 0, 0, 0);

        const diffA = dateA - today;
        const diffB = dateB - today;

        if (diffA !== diffB) {
          return diffA - diffB;
        }

        return a.priority - b.priority;
      })
    );
  };

  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <TaskInput onAddTask={handleAddTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onRemove={handleRemoveTask} />
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
    marginBottom: 20,
  },
});