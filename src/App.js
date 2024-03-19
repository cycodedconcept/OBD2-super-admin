import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

//pages
import Login from './pages/Login/Login';
import RecoverPass from './pages/Recover/RecoverPass';
import ResetPass from './pages/Recover/ResetPass';
import PassSuccess from './pages/Recover/PassSuccess';
import Users from './pages/Dashboard/Users';
import Meco from './pages/Dashboard/Meco';
import Settings from './pages/Dashboard/Settings';
import Flit from './pages/Dashboard/Flit';
import Devices from './pages/Dashboard/Devices';
import Products from './pages/Dashboard/Products';
import Suppliers from './pages/Dashboard/Suppliers';
import Dash from './pages/Dashboard/Dash';

//layouts
import Dashlayout from './layouts/Dashlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Login/>} />
      <Route path="recover-password" element ={<RecoverPass/>} />
      <Route path="reset-password" element ={<ResetPass/>} />
      <Route path="reset-successful" element ={<PassSuccess/>} />

      <Route path='dash' exact element={<Dashlayout/>} >
        <Route path='dashboard' element={<Dash />} />
        <Route path='users' element={<Users />} />
        <Route path='meco' element={<Meco />} />
        <Route path='flits' element={<Flit />} />
        <Route path='devices' element={<Devices />} /> 
        <Route path='products' element={<Products />} />
        <Route path='suppliers' element={<Suppliers />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
