import logo from './logo.svg';
import React, { useState } from "react";
import Header from './components/Header';
import Nav from './components/Nav';
function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div>
      <Header>
      <Nav pages={pages} 
      setCurrentpage ={setCurrentpage} 
      currentpage={currentpage}>
      </Nav>
      <main>

      </main>
      <footer>

      </footer>
      </Header>
     
    </div>
  );
}

export default App;
