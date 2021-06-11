import logo from './logo.svg';
import './App.css';
import Autocomplete from './component/AutoComplete';

function App() {
  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <Autocomplete suggestions={"Oranges", "Apples", "Banana", "Kiwi", "Mango"}/>
      {/* {console.log(suggestions)} */}
    </div>
  );
}

export default App;
