import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleLogin = () => {
    fetch("http://localhost:3000/login")
    .then(response => {
      console.info(response.json()
        .then((data) => {
          if ((data[0].usuario === usuario) && (data[0].senha === senha)) {
            setMensagem("Usuário e senha corretos")
          } else {
            setMensagem("Usuario ou senha incorreto")
          }
        }));
    })  
  }

  return (
    <div className="app--div--principal">
      <div className="app--div-card--login">
        <TextField
        value={usuario}
        onChange={(input) => {setUsuario(input.target.value)}}/>
        <TextField
        value={senha}
        onChange={(input) => {setSenha(input.target.value)}}/>
        <Button onClick={handleLogin}>Entrar</Button>
        <div>{mensagem}</div>
      </div>
    </div>
  );
}

export default App;
