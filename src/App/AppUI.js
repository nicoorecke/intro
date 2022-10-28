import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { Loader } from "../Loader";




function AppUI() {
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)

    return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
          <TodoList>
            {console.log('loading:',loading)}
            {error && <p>TERRIBLE ERRRROOOOR</p>}
            {loading && <Loader/>}
            {(!loading && !searchedTodos.length) && <p>Cree su primer TODO yayayayayaayyaya</p>}
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
         

        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUI};