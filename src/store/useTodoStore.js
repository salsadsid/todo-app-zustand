
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTodoStore = create(
    devtools(
        persist(
            (set) => ({
                todos: [],
                filter: 'all',
                addTodo: (text) =>
                    set((state) => ({
                        todos: [
                            ...state.todos,
                            { id: crypto.randomUUID(), text, completed: false },
                        ],
                    }), false, "addTodo"),
                toggleTodo: (id) =>
                    set((state) => ({
                        todos: state.todos.map((todo) =>
                            todo.id === id ? { ...todo, completed: !todo.completed } : todo
                        ),
                    }), false, "toggleTodo"),
                deleteTodo: (id) =>
                    set((state) => ({
                        todos: state.todos.filter((todo) => todo.id !== id),
                    }), false, "deleteTodo"),
                setFilter: (filter) => set({ filter }, false, "setFilter"),
                clearCompleted: () =>
                    set((state) => ({
                        todos: state.todos.filter((todo) => !todo.completed),
                    }), false, "clearCompleted"),
            }),
            {
                name: 'todo-storage',
            }
        )
    )

);

export default useTodoStore;
