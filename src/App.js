import React from 'react';
import './App.css';
import imgBoisRosoy from './images/logo-bois-de-rosoy.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const App = () => {
  let tailleOK = true;

  const verifTailleNbr = (nombre) => {
    //console.log('taille : ', tailleOK);
    if (nombre.length !== 2) {
      //console.log('taille (dans if) avant: ', tailleOK);
      tailleOK = false;
      //console.log('taille (dans if) apres: ', tailleOK);
      const divMessage = document.getElementById("message");
      divMessage.textContent = "vous devez entrer des nombres à 2 chiffres";

    } else {
      tailleOK = true;
      const divMessage = document.getElementById("message");
      divMessage.textContent = "";
    }

  }

  const verifChiffres = () => {

    const chiffre1 = document.getElementById("chiffre-1").value;
    const chiffre2 = document.getElementById("chiffre-2").value;
    const chiffre3 = document.getElementById("chiffre-3").value;
    const chiffre4 = document.getElementById("chiffre-4").value;
    const chiffre5 = document.getElementById("chiffre-5").value;

    verifTailleNbr(chiffre1);
    if (tailleOK === true) verifTailleNbr(chiffre2);
    if (tailleOK === true) verifTailleNbr(chiffre3);
    if (tailleOK === true) verifTailleNbr(chiffre4);
    if (tailleOK === true) verifTailleNbr(chiffre5);


    if (tailleOK === true) {
      if (chiffre1.toString() !== "06") {
        const divMessage = document.getElementById("message");
        divMessage.textContent = "Votre 1er chiffre n'est pas correct";
      } else {
        if (chiffre2.toString() !== "10") {
          const divMessage = document.getElementById("message");
          divMessage.textContent = "Votre 2ème chiffre n'est pas correct";
        } else {
          if (chiffre3.toString() !== "97") {
            const divMessage = document.getElementById("message");
            divMessage.textContent = "Votre 3ème chiffre n'est pas correct";
          } else {
            if (chiffre4.toString() !== "66") {
              const divMessage = document.getElementById("message");
              divMessage.textContent = "Votre 4ème chiffre n'est pas correct";
            } else {
              if (chiffre5.toString() !== "14") {
                const divMessage = document.getElementById("message");
                divMessage.textContent = "Votre 5ème chiffre n'est pas correct";
              } else {
                const divMessage = document.getElementById("message");
                divMessage.textContent = "Bravo !! Vous avez trouvez tous les chiffres, vous pouvez appeler ce numéro";
              }
            }
          }
        }
      }
    }
  }

  return (
    <div className="App">
      <div id="logo"><img src={imgBoisRosoy} alt="Le bois de Rosoy" /></div>
      <div id="text-accueil">Entrez les nombres trouvés :</div>
      <div id="inputs">
        <div className="input"><TextField id="chiffre-1" label="1er nombre" variant="outlined" type="number" /></div>
        <div className="input"><TextField id="chiffre-2" label="2ème nombre" variant="outlined" type="number" /></div>
        <div className="input"><TextField id="chiffre-3" label="3ème nombre" variant="outlined" type="number" /></div>
        <div className="input"><TextField id="chiffre-4" label="4ème nombre" variant="outlined" type="number" /></div>
        <div className="input"><TextField id="chiffre-5" label="5ème nombre" variant="outlined" type="number" /></div>
      </div>
      <div id="message"></div>
      <div id="bouton-verif">
        <Button variant="contained" onClick={verifChiffres}>Verifiez !!</Button>
      </div>
    </div>
  );
}

export default App;
