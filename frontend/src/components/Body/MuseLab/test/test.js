const initialData = {
  tasks: {
    'task-1': { id: 'task-1', name: 'task-1' },
    'task-2': { id: 'task-2', name: 'task-2' },
    'task-3': { id: 'task-3', name: 'task-3' },
    'task-4': { id: 'task-4', name: 'task-4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'column-1',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'column-2',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'column-3',
      taskIds: [],
    },
  },
  //facilitate reordering
  columnOrder: ['column-1', 'column-2', 'column-3'],
}
export default initialData;