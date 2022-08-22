import React from "react";
import { Button } from "@mui/material";

export const AddButton = ({ onClick }) => {
  return (
    <Button
      style={{
        backgroundColor: "#3467e9",
        marginRight: "16px",
        color: "#ffffff",
      }}
      onClick={onClick}
    >
      新規登録
    </Button>
  );
};
