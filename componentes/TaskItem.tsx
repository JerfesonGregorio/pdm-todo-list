import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskItem({ task, onRemove }) {
  return (
    <View style={styles.taskContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.taskText}>{task.text}</Text>
        <Text style={styles.details}>
          📅 {new Date(task.dueDate).toLocaleDateString('pt-BR')} | ⚡ Prioridade: {task.priority}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onRemove(task.id)} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 8,
  },
});