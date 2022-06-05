import logo from './logo.svg';
import React, { useState } from "react";
import Header from './components/Header/Header';
import Nav from './components/Nav/Navbar';
import Main from './components/Main/Main'
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
      <Header/>
      <Nav pages={pages} 
      setCurrentPage ={setCurrentPage} 
      currentPage={currentPage}>
      </Nav>
      <Main/>
      <footer>

      </footer>
      
      </div>
  );
}

export default App;
