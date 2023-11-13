import { IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";

export function InputUsage() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  // review Вот здесь не понял, зачем этот стейт для дизейбла
  const [isTyping, setIsTyping] = useState(false);

  return (
    <TextField
      variant="standard"
      label="Имя новой задачи"
      value={text}
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton
            disabled={!isTyping || text == ""}
            color="primary"
            onClick={() => {
              setText("");

              dispatch({
                type: "added",
                id: Date.now(),
                text: text,
              });
            }}
          >
            <AddIcon />
          </IconButton>
        ),
      }}
      onChange={(e) => {
        setText(e.target.value);
        setIsTyping(true);
      }}
    ></TextField>
  );
}
