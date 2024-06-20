import React, { useState } from 'react';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const Crudoperation: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };


  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>This is the CRUD operation component.</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add Todo</button>


      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            
              {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crudoperation;
