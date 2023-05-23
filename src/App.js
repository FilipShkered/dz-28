import { useState } from 'react'
import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import './App.css';

const initialList = [
  {
    "title": "make homework",
    "status": true,
    "done": false,
    "id": "96",
    "toDo": ""
  },
  {
    "title": "pet my dog",
    "status": true,
    "done": false,
    "id": "98",
    "toDo": ""
  },
  {
    "title": "cook a dinner",
    "status": true,
    "done": false,
    "id": "99",
    "toDo": ""
  },
];

function App() {
  const [list, setList] = useState(initialList)
  const [todoEdit, setTodoEdit] = useState({})

  function onTodoSubmit (todo) {
    if (todo.id) { // update
      // TodoApi.update(todo)
      const newList = list
        .map(todoItem => todoItem.id === todo.id ? todo : todoItem);

      setList(newList)
    } else { // create
      // TodoApi.create(todo)
      // Add todo with id from server

      const todoFromServer = {
        ...todo,
        id: Math.random(),
      }

      setList([...list, todoFromServer])
    }


  }

  function onTodoRemove (id) {
    const newList = list.filter(todo => todo.id !== id);

    setList(newList);
  }

  function onTodoEdit (todo) {
    setTodoEdit(todo)
  }

  return (
    <div className="App">
      <Header
        todoEdit={todoEdit}
        onTodoSubmit={onTodoSubmit}
      />
      <TodoList
        list={list}
        onTodoRemove={onTodoRemove}
        onTodoEdit={onTodoEdit}
      />
      <Footer />
    </div>
  );
}

export default App;