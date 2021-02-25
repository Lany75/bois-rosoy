import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';

import imgBoisRosoy from './images/logo-bois-de-rosoy.png';
import escapeForest from './images/Logo-ESCAPE-FOREST-noir-150x150.png';




const App = () => {
  const numeros = ["0", "6", "1", "0", "9", "7", "6", "6", "1", "4"];

  const afficheMessage = (message) => {
    const divMessage = document.getElementById("message");
    divMessage.textContent = message;
  }

  const verifChiffres = () => {

    const chiffres = [];

    for (let i = 1; i <= 10; i++) {
      chiffres.push(document.getElementById("chiffre-" + i).value);
    }

    const tailleOk = chiffres.every(currentValue => {
      return currentValue.length === 1;
    })

    if (!tailleOk) afficheMessage("Vous devez entrer des chiffres ...")
    else {
      let goodNumber = true;

      afficheMessage("");


      for (let i = 0; i < chiffres.length; i++) {
        if (chiffres[i] !== numeros[i]) {
          goodNumber = false;
        }
      }

      if (goodNumber) afficheMessage("Félicitations ! C'est le bon numéro. Contactez vite Axelle")
      else afficheMessage("Oups ! Le numéro n'est pas correct. Besoin d'aide ? Contactez findthetreasure@gmail.com")

    }
  }

  return (
    <div className="App">

      <div id="logo">
        <img id="logo-bois-rosoy" src={imgBoisRosoy} alt="Le bois de Rosoy" />
        <img id="logo-escape-forest" src={escapeForest} alt="Escape Forest" />
      </div>

      <h1>Allez vous trouver le trésor ?</h1>

      <div id="numeros-trouves">

        <div id="text-accueil">Entrez le numéro de téléphone</div>

        <div id="inputs">
          <div className="input-group">
            <div className="input"><TextField id="chiffre-1" variant="outlined" type="number" /></div>
            <div className="input"><TextField id="chiffre-2" variant="outlined" type="number" /></div>
          </div>
          <div className="input-group">
            <div className="input"><TextField id="chiffre-3" variant="outlined" type="number" /></div>
            <div className="input"><TextField id="chiffre-4" variant="outlined" type="number" /></div>
          </div>
          <div className="input-group">
            <div className="input"><TextField id="chiffre-5" variant="outlined" type="number" /></div>
            <div className="input"><TextField id="chiffre-6" variant="outlined" type="number" /></div>
          </div>
          <div className="input-group">
            <div className="input"><TextField id="chiffre-7" variant="outlined" type="number" /></div>
            <div className="input"><TextField id="chiffre-8" variant="outlined" type="number" /></div>
          </div>
          <div className="input-group">
            <div className="input"><TextField id="chiffre-9" variant="outlined" type="number" /></div>
            <div className="input"><TextField id="chiffre-10" variant="outlined" type="number" /></div>
          </div>
        </div>

        <div id="bouton-verif">
          <Button variant="contained" onClick={verifChiffres}>Verifiez !!</Button>
        </div>

      </div>

      <div id="message"></div>

    </div >
  );
}

export default App;
