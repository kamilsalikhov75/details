import { createContext, useReducer, useContext } from "react";

export const BearerContext = createContext('');


export const IsCheckedContext = createContext(null);
export const DispatchContext = createContext(null);
export const initialState = [];

export function CheckboxProvider({children}){
    const [isChecked, dispatch] = useReducer(checkboxReducer, initialState);
    return (
        <IsCheckedContext.Provider value={isChecked}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </IsCheckedContext.Provider>
    )
}

export function useIsChecked(){
    return useContext(IsCheckedContext);
}

export function useDispatch(){
    return useContext(DispatchContext);
}

export function checkboxReducer(state, action) {
    switch (action.type) {
        case 'add_checkbox': {
            console.log(state)
            return [...state, action.name]
        }
        case 'remove_checkbox': {
            console.log(state)
            return state.filter((item) => item !== action.name)
        }
        case 'reset_checkboxes':{
            console.log(state)
            return []
        }
        default: {
            throw Error('неизвестное действие: ' + action.type);
        }
    }
}
