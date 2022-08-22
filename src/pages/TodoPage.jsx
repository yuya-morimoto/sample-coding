import React from "react";
import { Box } from "@mui/material";
import { TodoListTemplate } from "../components/TodoListTemplate";
import { useTodoList } from "../hooks/useTodoList";

export const TodoPage = () => {
  const {
    todoList,
    addTodoListItem,
    deleteTodoListItem,
    completeTodoListItem,
  } = useTodoList();

  return (
    <Box
      style={{
        margin: "16px",
        maxWidth: "1024px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <TodoListTemplate
        todoList={todoList}
        completeTodoListItem={completeTodoListItem}
        deleteTodoListItem={deleteTodoListItem}
        addTodoListItem={addTodoListItem}
      />
    </Box>
  );
};
