import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskItem({ task, onRemove }) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task.text}</Text>
      
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => onRemove(task.id)}
      >
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
    justifyContent: 'space-between',
    elevation: 1,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});