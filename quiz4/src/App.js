//import logo from './logo.svg';
import './App.css';
import MultiButton from './cgi_multiButton'
import cgu from './Hello CGU'
  function App() {
  return (

  <div className="App">
  {cgu()}
  { MultiButton(10) }
  </div>
  );
  }

export default App;
