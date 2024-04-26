import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/TM_Titre.png';
import './Connexion.css';

const Connexion = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tokenJWT, setTokenJWT] = useState('');
    const url = 'http://192.168.39.43:7293/8.1b/connexion';

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const afficherToken = (event) =>{
      setTokenJWT(event.target.value);
    }
  
    const handleFormSubmit = (event) => {
      event.preventDefault(); // Empêche le rechargement de la page
        
      const data = {
        login: username, 
        password: password 
      };

      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      };
      
      axios.post(url, data, { headers })
        .then(response => {
          console.log('Réponse du serveur:', response.data);
          setTokenJWT(response.data.contenu);
        })
        .catch(error => {
          console.error('Erreur lors de la requête:', error.response.data.contenu);
        });
    };

    return (
        <div>
            <img src={logo} alt="Logo" />
            <form onSubmit={handleFormSubmit}>
                <div>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                </div>
                <div>
                <label htmlFor="Response">{afficherToken}</label>
                </div>
                <button type="submit">SE CONNECTER</button>
            </form>
        </div>
      
    )
}

export default Connexion