import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

//pages
import Login from './pages/Login/Login';
import RecoverPass from './pages/Recover/RecoverPass';
import ResetPass from './pages/Recover/ResetPass';
import PassSuccess from './pages/Recover/PassSuccess';

//layouts
import Dashlayout from './layouts/Dashlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Login/>} />
      <Route path="recover-password" element ={<RecoverPass/>} />
      <Route path="reset-password" element ={<ResetPass/>} />
      <Route path="reset-successful" element ={<PassSuccess/>} />
      <Route path='dash' element={<Dashlayout/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
