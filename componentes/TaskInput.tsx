import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';

export default function TaskInput({ onAddTask }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    if (!text || !dueDate) return;

    onAddTask({
      text,
      priority: Number(priority),
      dueDate: dueDate.toISOString(),
    });

    setText('');
    setPriority('');
    setDueDate(new Date());
    setModalVisible(false);
  };

  const onChangeDate = (event, selectedDate) => {
  setShowPicker(false);
  if (selectedDate) {
    setDueDate(selectedDate);
  }
};

  return (
    <View>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.openButtonText}>+ Nova tarefa</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.title}>Nova Tarefa</Text>

          <TextInput
            placeholder="Descrição"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />

          <TextInput
            placeholder="Prioridade (1-5)"
            style={styles.input}
            keyboardType="numeric"
            value={priority}
            onChangeText={setPriority}
          />

          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowPicker(true)}
          >
            <Text>
              📅 {dueDate.toLocaleDateString('pt-BR')}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <DateTimePicker
              value={dueDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChangeDate}
            />
          )}

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ marginTop: 10 }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  openButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  openButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  saveText: {
    color: '#FFF',
    textAlign: 'center',
  },
});