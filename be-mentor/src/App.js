import './App.css';
import Navbar  from './components/navbar.js';
import Collage from './components/identityphoto/collage';
import TextFields from './components/textfield';


function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <Collage /> */}
     <TextFields />
      <header className="App-header">   
      </header>
    </div>
  );
}

export default App;
