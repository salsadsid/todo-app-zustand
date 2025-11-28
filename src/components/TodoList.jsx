import { AnimatePresence } from 'framer-motion';
import useTodoStore from '../store/useTodoStore';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useTodoStore((state) => state.todos);
    const filter = useTodoStore((state) => state.filter);

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    if (todos.length === 0) {
        return (
            <div className="text-center py-12 text-slate-500">
                <p className="text-lg">No tasks yet. Add one above!</p>
            </div>
        );
    }

    if (filteredTodos.length === 0) {
        return (
            <div className="text-center py-12 text-slate-500">
                <p className="text-lg">No {filter} tasks found.</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <AnimatePresence mode="popLayout">
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </AnimatePresence>
        </div>
    );
}
