import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoListItems({title, description}) {
  return(
    <>
    <div className='todo-list-item'>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <hr />
    </>
  )
}

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [todoListItems, settodoListItems] = useState([])

  function handleChangeTitle(ev) {
    setTitle(ev.target.value)
  }
  function handleChangeDescription(ev) {
    setDescription(ev.target.value)
  }
  function handleAddTodo() {
    if (!title || !description) {
      alert("All fields are required!")
      return
    }
    const newTodo = {
      title: title,
      description: description
    }
    settodoListItems((prevTodoListItems) => ([...prevTodoListItems, newTodo]))

    setDescription("")
    setTitle("")
  }
  return(
    <>
    <div className="app-wrapper">
      <h1 className="title">Todo List App</h1>
      <form action="" className="todo-list-form">
        <input type="text" placeholder='todo title' className='form-input' value={title} onChange={handleChangeTitle}/>
        <input type="text" placeholder='todo description' className='form-input' value={description} onChange={handleChangeDescription}/>
        <button type='button'className='form-button' onClick={handleAddTodo}> Add Todo </button>
      </form>
      <h2>Todos</h2>
      <div className="heading">
        <h3 className="title">Title</h3>
        <h3 className="description">Description</h3>
      </div>
      <hr />
      <div className="todo-lists-container">
        {
          todoListItems.map((todo, idx) => {
            return <TodoListItems
            key={idx}
            title={todo.title} 
            description={todo.description}/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
