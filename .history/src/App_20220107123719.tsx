import { createContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from "./pages/Login";
import { Home } from "./pages/Home"
import { Principal } from "./pages/Principal"

const TestContext = createContext(''); /**para saber se o usuario está logado ou nao */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <TestContext.Provider>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
        </TestContext.Provider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
