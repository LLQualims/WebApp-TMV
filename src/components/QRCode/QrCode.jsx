import React, { useState } from 'react';
import axios from 'axios';
import '../QRCode/QrCode.css';

const QrCode = () => {
    const [urlServeur, setUrlServeur] = useState('');
  
    const handleUrlServeurChange = (event) => {
      setUrlServeur(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      };
      
      axios.get(urlServeur+"/helloworld", {headers})
        .then(response => {
          console.log('Réponse du serveur:', response.data.contenu);
        })
        .catch(error => {
          console.error('Erreur lors de la requête:', error.response.data.contenu);
        });
    };


  return (
    <div>
    <form onSubmit={handleFormSubmit}>
        <div>
        <label htmlFor="Url">Url du serveur</label>
        <input
            type="text"
            id="url"
            value={urlServeur}
            onChange={handleUrlServeurChange}
            required
        />
        </div>
        <button type="submit">VALIDER LA CONNEXION AU SERVEUR</button>
    </form>
</div>
  );
}
export default QrCode;
