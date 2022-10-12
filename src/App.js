import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { ToDoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
const toDos = [
  { text: 'Comprar tickets', complete: false },
  { text: 'Noviembre sin ti', complete: false },
  { text: 'Ver Tickets concierto', complete: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {toDos.map(todo => (
          <ToDoItem text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
