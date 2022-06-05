
import React, { useState } from "react";
import Header from './components/Header/Header';
import Nav from './components/Nav/Navbar';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';
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
     <Footer/> 
      </div>
  );
}

export default App;
