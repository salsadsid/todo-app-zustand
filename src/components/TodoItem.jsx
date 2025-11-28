// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';
import useTodoStore from '../store/useTodoStore';
import { cn } from '../lib/utils';

export default function TodoItem({ todo }) {
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
                "group flex items-center gap-4 rounded-xl bg-slate-800 p-4",
                "border border-slate-700/50 hover:border-slate-600",
                "transition-colors duration-200 shadow-sm"
            )}
        >
            <button
                onClick={() => toggleTodo(todo.id)}
                className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                    "transition-all duration-200",
                    todo.completed
                        ? "border-indigo-500 bg-indigo-500 text-white"
                        : "border-slate-500 hover:border-indigo-400"
                )}
            >
                {todo.completed && <Check size={14} strokeWidth={3} />}
            </button>

            <span
                className={cn(
                    "flex-1 text-lg transition-all duration-200",
                    todo.completed ? "text-slate-500 line-through" : "text-slate-200"
                )}
            >
                {todo.text}
            </span>

            <button
                onClick={() => deleteTodo(todo.id)}
                className={cn(
                    "opacity-0 group-hover:opacity-100 focus:opacity-100",
                    "text-slate-500 hover:text-red-400 transition-all duration-200"
                )}
            >
                <Trash2 size={20} />
            </button>
        </motion.div>
    );
}
