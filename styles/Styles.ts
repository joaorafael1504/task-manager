import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  headerHighlight: { color: '#2196F3' },
  list: {
    padding: 16,
    paddingBottom: 100,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 80,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

// Estilos para o TaskCounter
const taskCounterStyles = StyleSheet.create({
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
  },
  counterText: { fontSize: 14, color: '#007AFF' },
});

// Estilos para o TaskItem
const taskItemStyles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checked: { width: 16, height: 16, backgroundColor: '#2196F3', borderRadius: 8 },
  taskContent: { flex: 1 },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  taskTitle: { fontSize: 18, fontWeight: '500' },
  taskDescription: { fontSize: 14, color: '#666' },
  completed: { textDecorationLine: 'line-through', color: '#999' },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },
  editContainer: { flex: 1, gap: 8 },
  editButtons: { flexDirection: 'row', gap: 8, marginTop: 8 },
  input: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  iconFallback: {
    fontSize: 16,
    marginLeft: 4,
  },
});

// Estilos para o AddTask
const addTaskStyles = StyleSheet.create({
  addTask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addTrigger: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addText: { flex: 1, color: '#fff', fontSize: 16 },
  addButtons: { flexDirection: 'row', gap: 8, marginTop: 8 },
  addButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  input: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  iconFallback: {
    fontSize: 16,
    marginLeft: 4,
  },
});

export default {
  app: appStyles,
  taskCounter: taskCounterStyles,
  taskItem: taskItemStyles,
  addTask: addTaskStyles,
};
