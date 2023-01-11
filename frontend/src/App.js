import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element ={<h1>Product listing Component</h1>}></Route>
        <Route path="/add" element ={<h1>Add Product listing Component</h1>}></Route>
        <Route path="/update" element ={<h1>Update Product listing Component</h1>}></Route>
        <Route path="/logout" element ={<h1>Logout Component</h1>}></Route>
        <Route path="/profile" element ={<h1>Profile Component</h1>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
