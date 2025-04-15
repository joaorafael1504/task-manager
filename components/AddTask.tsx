import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/Styles';

interface AddTaskProps {
  onAdd: (title: string, description: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = () => {
    if (newTitle.trim()) {
      onAdd(newTitle.trim(), newDescription.trim());
      setNewTitle('');
      setNewDescription('');
      setIsAdding(false);
      Toast.show({ type: 'success', text1: 'Tarefa adicionada!' });
    }
  };

  return isAdding ? (
    <View style={styles.addTask.addTask}>
      <TextInput
        placeholder="Título da tarefa"
        value={newTitle}
        onChangeText={setNewTitle}
        style={styles.addTask.input}
        autoFocus
      />
      <TextInput
        placeholder="Descrição (opcional)"
        value={newDescription}
        onChangeText={setNewDescription}
        style={styles.addTask.input}
        multiline
      />
      <View style={styles.addTask.addButtons}>
        <TouchableOpacity onPress={handleSubmit} style={styles.addTask.addButton}>
          <Text style={styles.addTask.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsAdding(false)}
          style={styles.addTask.cancelButton}
        >
          <Text style={styles.addTask.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <TouchableOpacity onPress={() => setIsAdding(true)} style={styles.addTask.addTrigger}>
      <Text style={styles.addTask.addText}>Adicionar uma nova tarefa</Text>
      <View style={styles.addTask.iconButton}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={styles.addTask.iconFallback} />
      </View>
    </TouchableOpacity>
  );
};

export default AddTask;
