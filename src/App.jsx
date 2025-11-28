import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

import { Github } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30 relative">
            <a
                href="https://github.com/salsadsid/todo-app-zustand"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 flex items-center gap-2 p-2 text-slate-500 hover:text-indigo-400 transition-colors duration-200"
                aria-label="Star on GitHub"
            >
                <span className="text-sm font-medium">Give Star</span>
                <Github className="w-5 h-5" />
            </a>
            <div className="max-w-2xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        Tasks
                    </h1>
                    <p className="text-slate-400">Stay organized and focused</p>
                </header>

                <main className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 p-6 sm:p-8 shadow-2xl shadow-black/50">
                    <TodoInput />
                    <TodoList />
                    <TodoFilters />
                </main>

                <footer className="mt-12 text-center text-slate-600 text-sm">
                    <p>Drag and drop to reorder (coming soon)</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
