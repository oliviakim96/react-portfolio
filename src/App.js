import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
function App() {
  return (
    <div>
      <header>
      <Nav pages={pages} setCurrentpage={setCurrentpage} currentpage={currentpage}></Nav>
      <main>

      </main>
      <footer>

      </footer>
      </header>
     
    </div>
  );
}

export default App;
