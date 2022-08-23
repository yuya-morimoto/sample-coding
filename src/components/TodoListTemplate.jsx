import { List } from "@mui/material";
import { Box } from "@mui/system";
import { TodoListItem } from "./TodoListItem";
import { TodoListHeader } from "./TodoListHeader";

export const TodoListTemplate = ({
  todoList,
  completeTodoListItem,
  deleteTodoListItem,
  addTodoListItem,
}) => {
  return (
    <Box>
      <TodoListHeader onClickAdd={(value) => addTodoListItem(value)} />
      <List>
        {todoList.map((todoListItem) => (
          <TodoListItem
            key={`${todoListItem.id}-${todoListItem.status}`}
            data={todoListItem}
            onClickComplete={completeTodoListItem}
            onClickDelete={deleteTodoListItem}
          />
        ))}
      </List>
    </Box>
  );
};
