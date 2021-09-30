import './App.css';
import SearchWord from './SearchWord';

function App() {
  return (
    <div className='container'>
    <div className="App">
      <header className="App-header">
        <SearchWord />
      </header>


    </div>
    <footer>
      <small>
      <a href='https://github.com/hejazn86/react-dictionary-app' alt='github source of the project' className='text-decoration-none'>Open-source</a> project, coded by Hejaz Nawasser
      </small>
      </footer>
    </div>
  );
}

export default App;
