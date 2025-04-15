import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';

interface TaskCounterProps {
  count: number;
}

const TaskCounter: React.FC<TaskCounterProps> = ({ count }) => (
  <View style={styles.taskCounter.counter}>
    <Text style={styles.taskCounter.counterText}>
      {count} {count === 1 ? 'tarefa' : 'tarefas'}
    </Text>
  </View>
);

export default TaskCounter;
