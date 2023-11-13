import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    );
    return (
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export function useTasks() {
    return useContext(TaskContext);
}

export function useTasksDispatch() {
    return useContext(TaskDispatchContext);
}

//  review Вместо того, чтобы повсюду писать 'added' 'edited', сделай объект с этими значениями и используй везде его.
//   Это позволит избежать ошибок, когда ошибся при написании и сидишь ищешь, что не так. Да и с объектами будут поздсказки от среды разработки

function taskReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                inProcess: true,
            }
            ]
        };
        case 'edited': {
            return tasks.map(t => {
                // review Не понятно что за t, лучше не использовать сокращения, используй полное название для переменной
                if (t.id == action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        
        case 'done': {
            return tasks.map(t =>{
                if (t.id === action.id){
                    return { ...t, inProcess: false};
                } else {
                    return t;
                }
            })
        }
        
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('неизвестное действие ' + action.type)
        }
    }
}

export const initialTasks = [
    // { id: 0, text: 'Philosopher’s Path', inProcess: true },
    // { id: 1, text: 'Visit the temple', inProcess: true },
    // { id: 2, text: 'Drink matcha', inProcess: false }
]