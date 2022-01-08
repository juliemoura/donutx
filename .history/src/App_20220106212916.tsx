import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from "./pages/Login";
import { Home } from "./pages/Home"
import { Principal } from "./pages/Principal"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
