import { createContext, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from "./pages/Login";
import { Home } from "./pages/Home"
import { Principal } from "./pages/Principal"

import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as any); /**para saber se o usuario está logado ou nao. ta {} pq significa q vou inicia-lo com uma string */

function App() {
  
  const [user, setUser] = useState()
  function signInWithGoogle (){
    const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if(result.user){ /**se a autenticacao deu certo */
              const { displayName, photoURL, uid } = result.user
            }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{user, setUser}}>  {/**valor que vai ser enviado pra tela mostrando as informacoes da pessoa q ta logada */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
