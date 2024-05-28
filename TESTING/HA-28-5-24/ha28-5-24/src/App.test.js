// teste alle Funktionen aus passwort.js hier
const {checkIfGrossbuchstabeVorhanden, checkIfLaengeGroesserAcht, checkIfZahlVorhanden} = require("./App.js")

describe("Buchstabe Vorhanden oder Nicht", () =>{
  test("Groß Buchstabe Vorhanden", () =>{
    const testString = "abcDEF";
    expect(checkIfGrossbuchstabeVorhanden(testString)).toBe(true);
})

test("Groß Buchstabe Vorhanden", () =>{
  const testString = "abcdef";
  expect(checkIfGrossbuchstabeVorhanden(testString)).toBe(false);
})
})

describe("Mindestens 8 Zeichen oder Nicht", () =>{
test("Mindestens 8 Zeichen", () =>{
  const textAnzahl = "abcdefgh"
  expect(checkIfLaengeGroesserAcht(textAnzahl)).toBe(true);
})

test("Mindestens 8 Zeichen", () =>{
  const textAnzahl = "abc"
  expect(checkIfLaengeGroesserAcht(textAnzahl)).toBe(false);
})
})

describe("Zahl vorhanden oder Nicht", ()=>{
test("Zahl Vorhanden", () =>{
  const test_Zahl_Vorhanden = "abc123";
  expect(checkIfZahlVorhanden(test_Zahl_Vorhanden)).toBe(true);
})

test("Keine Zahl Vorhanden", () =>{
  const test_Zahl_Vorhanden = "abcdef";
  expect(checkIfZahlVorhanden(test_Zahl_Vorhanden)).toBe(false);
})
})
