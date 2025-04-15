import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/Styles';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      onEdit({ ...task, title: editTitle, description: editDescription });
      Toast.show({ type: 'success', text1: 'Tarefa atualizada!' });
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    onToggle(task.id);
    if (!task.completed) {
      Toast.show({
        type: 'success',
        text1: 'Tarefa marcada como concluída!',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Tarefa marcada como pendente!',
      });
    }
  };

  return (
    <View style={styles.taskItem.taskItem}>
      <TouchableOpacity onPress={handleToggle} style={styles.taskItem.checkbox}>
        {task.completed && <View style={styles.taskItem.checked} />}
      </TouchableOpacity>
      {isEditing ? (
        <View style={styles.taskItem.editContainer}>
          <TextInput
            value={editTitle}
            onChangeText={setEditTitle}
            style={styles.taskItem.input}
            autoFocus
          />
          <TextInput
            value={editDescription}
            onChangeText={setEditDescription}
            style={styles.taskItem.input}
            multiline
          />
          <View style={styles.taskItem.editButtons}>
            <TouchableOpacity onPress={handleEdit} style={styles.taskItem.iconButton}>
              <Icon name="check" size={20} color="#4CAF50" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEditing(false)} style={styles.taskItem.iconButton}>
              <Icon name="x" size={20} color="#F44336" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.taskItem.taskContent}>
          <View style={styles.taskItem.titleRow}>
            <Text
              style={[styles.taskItem.taskTitle, task.completed && styles.taskItem.completed]}
            >
              {task.title}
            </Text>
            <View style={styles.taskItem.buttons}>
              <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.taskItem.iconButton}>
                <Icon name="edit-2" size={20} color="#2196F3" />
                <Text style={styles.taskItem.iconFallback} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.taskItem.iconButton}>
                <Icon name="trash-2" size={20} color="#F44336" />
                <Text style={styles.taskItem.iconFallback} />
              </TouchableOpacity>
            </View>
          </View>
          {task.description && (
            <Text
              style={[
                styles.taskItem.taskDescription,
                task.completed && styles.taskItem.completed,
              ]}
            >
              {task.description}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default TaskItem;
