import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AddProduct from './Components/Management/AddProducts/AddProduct';
import MyItems from './Components/User/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path='/addItem' element={<AddProduct></AddProduct>}></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems>
            </MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
