// Implementiere Funktion um zu prüfen, 
// ob ein gegebener Input min. einen Großbuchstaben enthält

function checkIfGrossbuchstabeVorhanden(a){

  return /[A-Z]/.test(a);
}

// Implementiere Funktion um zu prüfen, ob ein gegeben Input min. 8 Zeichen hat.

function checkIfLaengeGroesserAcht(a){
  return a.length >= 8;
}


// Implementiere Funktion um zu prüfen, ob eine Zahl vorhanden ist.
function checkIfZahlVorhanden(a){
  const regex = /\d/;
  return regex.test(a);
}


module.exports = {checkIfGrossbuchstabeVorhanden, checkIfLaengeGroesserAcht, checkIfZahlVorhanden}