import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCounter from './components/TaskCounter';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import styles from './styles/Styles';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: uuid.v4() as string,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    Toast.show({ type: 'error', text1: 'Tarefa excluída!' });
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <SafeAreaView style={styles.app.container}>
      <View style={styles.app.header}>
        <Text style={styles.app.headerText}>
          Task <Text style={styles.app.headerHighlight}>Manager</Text>
        </Text>
        <TaskCounter count={tasks.length} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.app.emptyContainer}>
            <View style={styles.app.iconWrapper}>
              <Icon name="clipboard" size={60} color="#007AFF" />
            </View>
            <Text style={styles.app.emptyTitle}>Sem tarefas</Text>
            <Text style={styles.app.emptyDescription}>
              Adicione sua primeira tarefa usando o campo abaixo.
            </Text>
          </View>
        }
        contentContainerStyle={styles.app.list}
      />
      <AddTask onAdd={addTask} />
      <Toast />
    </SafeAreaView>
  );
};

export default App;
