// import logo from './logo.svg';
import { v4 as uuid } from 'uuid';
import './App.css';
import React, { useEffect, useState } from 'react';
import Todo from './Todo.jsx';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다',
      isDone: false,
    },
    {
      id: 2,
      title: '자바스크립트 공부하기',
      content: '자바스크립트 기초를 공부해봅시다',
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState(''); // 제목 저장
  const [content, setContent] = useState(''); // 내용 저장

  const saveTitle = (event) => {
    setTitle(event.target.value);
  };

  const saveContent = (event) => {
    setContent(event.target.value);
  };

  const saveTodo = () => {
    const todo = { id: uuid(), title: title, content: content, isDone: false };
    setTodoList((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    // 해당 id와 일치하는 항목을 찾습니다.
    const todoToDelete = todoList.find((todo) => todo.id === id);

    if (todoToDelete) {
      // 찾은 항목을 제외한 나머지 항목들로 새로운 배열을 생성합니다.
      const filteredTodoList = todoList.filter((todo) => todo.id !== id);

      // 새로운 배열로 todoList를 갱신합니다.
      setTodoList(filteredTodoList);
    }
  };

  const updateTodo = (id) => {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) todo = { ...todo, isDone: !todo.isDone };
      return todo;
    });

    setTodoList(updateTodoList);
  };

  return (
    <div className="container">
      <div className="header">
        <div>My Todo List</div>
      </div>
      <div className="title">
        제목
        <input
          className="input1"
          onChange={(event) => saveTitle(event)}
        ></input>
        내용
        <input
          className="input1"
          onChange={(event) => saveContent(event)}
        ></input>
        <button className="btn1" onClick={saveTodo}>
          추가하기
        </button>
      </div>

      <h2>Working.. 🔥</h2>
      {/* <div className="box">
        <h2>리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
        <button className="btn2">삭제하기</button>
        <button className="btn3">완료</button>
      </div> */}
      {todoList
        .filter((value) => !value.isDone)
        .map((todo) => (
          <Todo
            key={todo.id}
            todoList={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}

      <h2>Done..! 🎉</h2>
      {/* <div className="box">
        <h2>리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
        <button className="btn2">삭제하기</button>
        <button className="btn3">완료</button>
      </div> */}
      {todoList
        .filter((value) => value.isDone)
        .map((todo) => (
          <Todo
            key={todo.id}
            todoList={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
    </div>
  );
}

export default App;
