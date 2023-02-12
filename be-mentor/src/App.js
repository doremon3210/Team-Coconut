import './App.css';
import Navbar  from './components/navbar.js';
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
     <button style={{ marginLeft: 85 , display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0',  width: 100, height: 40, backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: 5,  fontSize: 16, cursor: 'pointer', textAlign: 'center' }}
>
   Submit
</button>

      <header className="App-header">   
      </header>
    </div>
  );
}

export default App;
