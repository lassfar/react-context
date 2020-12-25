import './App.css';
import BookAdd from './components/BookAdd';
import Books from './components/Books';
import BookContextProvider from './components/contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Books />
        <BookAdd />
      </BookContextProvider>
    </div>
  );
}

export default App;
