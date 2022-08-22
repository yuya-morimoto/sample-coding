import React, { useState } from "react";
import { AddButton } from "./AddButton";
import { Box, TextField } from "@mui/material";

export const InputAndAddTodo = ({ onClickAdd }) => {
  const [todoName, setTodoName] = useState("");

  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <TextField
        size="small"
        value={todoName}
        onChange={(text) => setTodoName(text.target.value)}
        style={{
          marginRight: 8,
        }}
      />
      <AddButton
        onClick={() => {
          onClickAdd(todoName);
          setTodoName("");
        }}
      />
    </Box>
  );
};
