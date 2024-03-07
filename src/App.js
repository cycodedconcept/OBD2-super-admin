import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import RecoverPass from './pages/Recover/RecoverPass';
import ResetPass from './pages/Recover/ResetPass';
import PassSuccess from './pages/Recover/PassSuccess';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact Component={Login}/>
          <Route path="/recover-password" Component={RecoverPass}/>
          <Route path="/reset-password" Component={ResetPass}/>
          <Route path="/reset-successful" Component={PassSuccess}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
