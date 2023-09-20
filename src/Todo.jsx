import React from 'react'; // 필요한 경우 React를 import합니다.
import './App.css';

const Todo = ({ todoList, deleteTodo, updateTodo }) => {
  return (
    <div className="todoContainer">
      <h2>{todoList.title}</h2>
      <div>{todoList.content}</div>
      <button className="btn2" onClick={() => deleteTodo(todoList.id)}>
        삭제하기
      </button>
      <button className="btn3" onClick={() => updateTodo(todoList.id)}>
        {todoList.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

export default Todo;
