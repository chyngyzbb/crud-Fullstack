import React, { useEffect, useState } from "react";
import TodoList from "../TodoList";
import axios from "axios";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  // const API = "http://localhost:8080/api/employees";
    const API = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/employees';

  console.log(todos);

  
  
  const getAllTasks = async () => {
    try {
      const response = await axios(API);
      setTodos(response.data);
      console.log(response);
      
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
    
  };

  const handleClick = async () => {
    const newTitle={email:value,isDone:false}
    try {
      await axios.post(API,newTitle);
      getAllTasks();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getAllTasks();
    } catch (e) {
      console.log(e);
    }
  };

  const updateTodo = async (id, newTitle,status) => {
    try {
      await axios.put(`${API}/${id}`, { email: newTitle,isDone:status });
      getAllTasks();
    } catch (e) {
      console.log(e);
    }
  };

  const updateStatus = async (id) => {
    const found = todos.find((el) => el.id === id);
    const res={...found,isDone:!found.isDone}
    try {
      await axios.put(
        `${API}/${id}`,
        res
      );
      getAllTasks();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  console.log(todos);

  return (
    <div>
      <div className="w-[500px] flex gap-1 my-[50px] mx-auto items-center">
        <input
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block w-full p-4 outline-none py-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-blue-100 focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />

        <button
          onClick={handleClick}
          type="button"
          className="text-white h-[52px] my-2  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add
        </button>
      </div>
      {todos
        .filter((el) => !el.isDone)
        .map((el) => (
          <TodoList
            el={el}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            updateStatus={updateStatus}
            key={el.id}
          />
        ))}
      <h1 className="text-center mt-6">Законченные дела:</h1>
      {todos
        .filter((el) => el.isDone)
        .map((el) => (
          <TodoList
            updateStatus={updateStatus}
            updateTodo={updateTodo}
            el={el}
            key={el.id}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
};

export default Todo;
