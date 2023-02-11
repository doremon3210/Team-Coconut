import './App.css';
import Navbar  from './components/navbar.js';
import Pt1 from './components/identityphoto/identityphoto1';
import Pt2 from './components/identityphoto/identityphoto2';
import Pt3 from './components/identityphoto/identityphoto3';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pt1 />
      <Pt2/>
      <Pt3/>
      <header className="App-header">   
      </header>
    </div>
  );
}

export default App;
