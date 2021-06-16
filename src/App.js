import { useState, useEffect } from 'react';

import './App.css';
import Autocomplete from './component/AutoComplete';
import JSONDATA from './users.json';

function App() {

  return <div>
    <h1>Testing Data </h1>
    
    <Autocomplete users={JSONDATA} />

  </div>
}

export default App;
