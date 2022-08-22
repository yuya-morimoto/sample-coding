import { useState } from "react";
import { todoListMaster } from "../data/todoListMaster";
import { generateId } from "../utils/generateId";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState(todoListMaster);

  const addTodoListItem = (title) => {
    if (!title) {
      window.alert("TODO名を入力してください");
      return;
    }
    setTodoList((todoList) => [
      ...todoList,
      { id: generateId(), title: title, status: 0 },
    ]);
  };

  const deleteTodoListItem = (id) => {
    const filteredTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filteredTodoList);
  };

  const completeTodoListItem = (id) => {
    const filteredTodoList = todoList.map((item) => {
      if (item.id === id && item.status === 0) {
        item.status = 1;
      } else if (item.id === id && item.status === 1) {
        item.status = 0;
      }
      return item;
    });
    setTodoList(filteredTodoList);
  };

  return {
    todoList,
    addTodoListItem,
    deleteTodoListItem,
    completeTodoListItem,
  };
};
