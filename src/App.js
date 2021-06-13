import { useState, useEffect } from 'react';

import './App.css';
import Autocomplete from './component/AutoComplete';
import JSONDATA from './users.json';

function App() {


  const [userSearch, setUserSearch] = useState('');

  const [users, setUsers] = useState(JSONDATA);

  return <div>
    <h1>Testing Data </h1>
    {/* <input type='text' placeholder='Search...' onChange={event => { setUserSearch(event.target.value) }} /> */}
    
    <Autocomplete users={JSONDATA} />
  </div>
}

export default App;
