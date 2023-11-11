import { Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, List, ListItem, ListItemButton, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TaskContext";
import { initialTasks } from "./TaskContext";


export function TaskList() {
    const tasks = useTasks();
    const inProcessTasks = tasks.filter(task => task.inProcess);
    const completedTasks = tasks.filter(task => !task.inProcess);
    console.log(completedTasks)
    
    return (
        <>
            {inProcessTasks.length > 0 && (
                <div className="plan">
                    <Typography variant="caption">ПЛАН ({inProcessTasks.length}) </Typography>
                    <List>
                        {inProcessTasks.map(task => (
                            <ListItem key={task.id}>
                                <TaskItem task={task} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
            
            {completedTasks.length > 0 && (
                <div className="done">
                    <Typography variant="caption">ГОТОВО ({completedTasks.length})</Typography>
                    <List>
                        {completedTasks.map(task => (
                            <ListItem key={task.id}>
                                <TaskItem task={task} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
            
        </>
    )
}

export function TaskItem({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <TextField sx={{ width: '100%' }} variant="standard" label='имя задачи' value={task.text} onChange={e => {
                dispatch({
                    type: 'edited',
                    task: {
                        ...task,
                        text: e.target.value
                    }
                })
            }} InputProps={{
                endAdornment: (
                    <IconButton onClick={() => setIsEditing(false)}>
                        <CheckIcon />
                    </IconButton>
                )
            }}></TextField>
        )
    } else {
        taskContent = (
            <>
                <Checkbox checked={!task.inProcess} onChange={e => {
                    if(task.inProcess){
                        dispatch({
                        type: 'done',
                        id: task.id
                    })
                    } else{
                        
                        dispatch({
                            type: 'added',
                            id: task.id++,
                            text: task.text}
                        )
                        dispatch({
                            type: 'deleted',
                            id: task.id
                        })
                    }
                    
                }}></Checkbox>
                <Typography sx={{ width: '100%' }} variant="body1">{task.text}</Typography>;
                <IconButton aria-label="edit" onClick={() => setIsEditing(true)}>
                    <EditIcon color="info" />
                </IconButton>
            </>
        )
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>

            {taskContent}
            <IconButton aria-label="delete" onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                })
            }}>
                <DeleteIcon color="warning" />
            </IconButton>
        </Box>
    )
}