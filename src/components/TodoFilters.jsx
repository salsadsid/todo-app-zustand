import useTodoStore from '../store/useTodoStore';
import { cn } from '../lib/utils';

const FILTERS = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
];

export default function TodoFilters() {
    const filter = useTodoStore((state) => state.filter);
    const setFilter = useTodoStore((state) => state.setFilter);
    const todos = useTodoStore((state) => state.todos);
    const clearCompleted = useTodoStore((state) => state.clearCompleted);

    const activeCount = todos.filter((t) => !t.completed).length;
    const hasCompleted = todos.some((t) => t.completed);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400 mt-6">
            <span>{activeCount} items left</span>

            <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
                {FILTERS.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={cn(
                            "px-3 py-1 rounded-md transition-all duration-200",
                            filter === key
                                ? "bg-slate-700 text-white shadow-sm"
                                : "hover:text-slate-200 hover:bg-slate-700/50"
                        )}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <button
                onClick={clearCompleted}
                disabled={!hasCompleted}
                className={cn(
                    "hover:text-slate-200 transition-colors",
                    !hasCompleted && "invisible"
                )}
            >
                Clear completed
            </button>
        </div>
    );
}
