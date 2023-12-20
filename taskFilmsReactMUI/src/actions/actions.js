
export const addToken = (token) => ({
    type: 'ADD_TOKEN',
    payload: token
})

export const addData = (data) => ({
    type: 'ADD_DATA',
    payload: data
})

export const setSearchItem = (title) => ({
    type: 'SET_SEARCH_ITEM',
    payload: title
})

export const clearSearchItem = () => ({
    type: 'CLEAR_SEARCH_ITEM'
})

export const setSortItem = (sort) => {
    return {
        type: 'SET_SORT_ITEM',
        payload: sort
    }
}

export const setTypeItem = (type) => {
    return {
        type: 'SET_TYPE_ITEM',
        payload: type
    }
}
