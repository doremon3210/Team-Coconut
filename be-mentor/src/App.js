import './App.css';
import Navbar  from './components/navbar.js';
import Collage from './components/identityphoto/collage';
import TextFields from './components/textfield';
import Checkbox from './components/checkbox';



function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <Collage /> */}
     <h1 style = {{textAlign: "left", marginLeft: 88}}> Personal Information</h1>
     <TextFields />
     
     <h1 style = {{textAlign : 'left', margin: 88 }}> Career Field </h1>
     <Checkbox />
     
      <header className="App-header">   
      </header>
    </div>
  );
}

export default App;
