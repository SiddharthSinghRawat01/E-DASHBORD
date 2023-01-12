import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateCompnent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path="/" element ={<ProductList />}></Route>
        <Route path="/add" element ={<AddProduct />}></Route>
        <Route path="/update" element ={<h1>Update Product listing Component</h1>}></Route>
        <Route path="/logout" element ={<h1>Logout Component</h1>}></Route>
        <Route path="/profile" element ={<h1>Profile Component</h1>}></Route>
        </Route>
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
