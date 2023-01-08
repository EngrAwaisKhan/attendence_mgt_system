import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomeScreen from './screen/home';
import LoginScreen from './screen/login';
import RegisterScreen from './screen/register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
