import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Nav from './Component/Header/Nav/Nav';
import Shop from './Component/Header/Shop/Shop';



function App() {
  return (
    <div className="App">
   <Header></Header>
   <Nav></Nav>
   <Shop></Shop>

    </div>
  );
}

export default App;
