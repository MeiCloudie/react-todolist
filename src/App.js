// import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div>
      <header>
        <h1>TO DO LIST</h1>
      </header>

      <main>
        {/* component ToDo */}
        <ToDo></ToDo>
      </main>

      <footer>
        <p>Author: Truong Thuc Van - HUTECH - 2080600803</p>
      </footer>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
