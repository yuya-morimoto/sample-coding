import React from "react";
import { Button } from "@mui/material";

export const CompleteButton = ({ onClick, status }) => {
  switch (status) {
    case 0:
      return (
        <Button
          style={{ backgroundColor: "#d7da2d", color: "#333333" }}
          onClick={onClick}
        >
          進行中
        </Button>
      );
    case 1:
      return (
        <Button
          style={{ backgroundColor: "#53cd7a", color: "#ffffff" }}
          onClick={onClick}
        >
          完了
        </Button>
      );
    default:
      return (
        <Button
          style={{ backgroundColor: "#6b6b6b", color: "#ffffff" }}
          onClick={onClick}
        >
          不可
        </Button>
      );
  }
};
