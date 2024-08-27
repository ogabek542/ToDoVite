import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETE, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM ,} from "./actionTypes";

export const addTodo = (text) => ({
    type:ADD_TODO,
    payload:{text},
});

export const toggleToDo = (id) => ({
    type:TOGGLE_TODO,
    payload:{id},
});

export const removeToDo = (id) => ({
    type:REMOVE_TODO,
    payload:{id},
});

export const markComplete = (id) => ({
    type:MARK_COMPLETE,
    payload:{id},
});
export const markInComplete = (id) => ({
    type:MARK_INCOMPLETE,
    payload:{id},
});
export const markAllComplete = (id) => ({
    type:MARK_ALL_COMPLETED,
    payload:{id},
});

export const filterToDos = (filter) => ({
    type:FILTER_TODOS,
    payload:{filter},
});

export const updateSearchTerm = (searchTerm) => ({
    type:UPDATE_SEARCH_TERM,
    payload:{searchTerm},
});


