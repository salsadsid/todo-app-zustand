import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30">
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
