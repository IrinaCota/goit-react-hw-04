import { useEffect, useRef, useState } from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';


function App() {
    const appRef = useRef();

 
    return (
      <div ref={appRef}>
        <SearchBar/>

      </div>
    );
  }

export default App;