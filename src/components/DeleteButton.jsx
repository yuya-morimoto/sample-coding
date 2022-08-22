import React from "react";
import { Button } from "@mui/material";

export const DeleteButton = ({ onClick }) => {
  return (
    <Button
      style={{
        backgroundColor: "#e94c34",
        marginLeft: "8px",
        color: "#ffffff",
      }}
      onClick={onClick}
    >
      削除
    </Button>
  );
};
