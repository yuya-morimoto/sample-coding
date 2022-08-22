import React from "react";
import { Box, Typography } from "@mui/material";
import { InputAndAddTodo } from "./InputAndAddTodo";

export const TodoListHeader = ({ onClickAdd }) => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        style={{
          color: "rgba(0, 0, 255, 1) ",
          fontWeight: "bold",
        }}
      >
        TODOLIST
      </Typography>
      <InputAndAddTodo onClickAdd={(value) => onClickAdd(value)} />
    </Box>
  );
};
