import { createContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from "./pages/Login";
import { Home } from "./pages/Home"
import { Principal } from "./pages/Principal"

export const TestContext = createContext(''); /**para saber se o usuario está logado ou nao */

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
