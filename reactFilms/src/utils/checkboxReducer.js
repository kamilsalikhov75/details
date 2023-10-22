export const initialState = [];

export function checkboxReducer(state, action) {
    switch (action.type) {
        case 'add_checkbox': {
            return [...state, action.name]
        }
        case 'remove_checkbox': {
            return state.filter((item) => item !== action.name)
        }
        case 'reset_checkboxes':{
            return []
        }
    }
}
