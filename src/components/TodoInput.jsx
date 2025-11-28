import { useState } from 'react';
import { Plus } from 'lucide-react';
import useTodoStore from '../store/useTodoStore';
import { cn } from '../lib/utils';

export default function TodoInput() {
    const [text, setText] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mb-8">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className={cn(
                    "w-full bg-slate-800 text-slate-100 placeholder:text-slate-500",
                    "rounded-xl py-4 pl-6 pr-14 text-lg outline-none",
                    "border border-slate-700 focus:border-indigo-500",
                    "transition-all duration-200 shadow-lg shadow-slate-900/50"
                )}
            />
            <button
                type="submit"
                disabled={!text.trim()}
                className={cn(
                    "absolute right-2 top-2 bottom-2 aspect-square",
                    "flex items-center justify-center rounded-lg",
                    "bg-indigo-600 text-white transition-all duration-200",
                    "hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600",
                    "disabled:cursor-not-allowed"
                )}
            >
                <Plus size={24} />
            </button>
        </form>
    );
}
