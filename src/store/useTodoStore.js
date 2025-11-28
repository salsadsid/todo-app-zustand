
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
            }),
            {
                name: 'todo-storage',
            }
        )
    )

);

export default useTodoStore;
