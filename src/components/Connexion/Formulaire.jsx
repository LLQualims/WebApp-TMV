import React, { useState } from 'react';
import axios from 'axios';
import './Formulaire.css';

const Formulaire = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const url = 'http://192.168.39.43:7293/8.1b/connexion';

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
        
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
        })
        .catch(error => {
          console.error('Erreur lors de la requête:', error.response.data.contenu);
        });
    };

    return (
        <div>
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
                <button type="submit">SE CONNECTER</button>
            </form>
        </div>
      
    )
}

export default Formulaire