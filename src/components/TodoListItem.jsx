import { ListItem, Typography, Box } from "@mui/material";
import { CompleteButton } from "./CompleteButton";
import { DeleteButton } from "./DeleteButton";

export const TodoListItem = ({ data, onClickComplete, onClickDelete }) => {
  console.log("TodoListItemのレンダリング");
  return (
    <ListItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 2px 0px 0px rgba(0, 0, 255, .2)",
      }}
    >
      <Typography>{data.title}</Typography>
      <Box>
        <CompleteButton
          onClick={() => onClickComplete(data.id)}
          status={data.status}
        />
        <DeleteButton onClick={() => onClickDelete(data.id)} />
      </Box>
    </ListItem>
  );
};
