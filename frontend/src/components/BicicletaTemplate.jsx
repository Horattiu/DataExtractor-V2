import React from "react";
import { useState } from "react";

const BicicletaElectricaTemplate = ({ pairs }) => {
  // Definim o listă completă a specificațiilor cu linkurile corespunzătoare
  const specImages = {
    Transmisie:
      "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",

    Cadru: "https://c.cdnmp.net/183479982/content/DESCRIERI/CADRU.png",
    "Suspensie Cadru":
      "https://c.cdnmp.net/183479982/content/DESCRIERI/SUSPENSIE-CADRU.png",
    Furca: "https://c.cdnmp.net/183479982/content/DESCRIERI/FURCA.png",
    Cuvetarie:
      "https://c.cdnmp.net/183479982/content/DESCRIERI/CUVET%C4%82RIE.png",
    Pedalier: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
    Pedale: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
    Pinioane:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/PINIOANE.png",
  Lant: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/LANT.png",
  "Schimbator Spate":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-SPATE.png",
  "Schimbator Fata":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-FA%C8%9A%C4%82.png",
  "Manete Schimbator":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-SCHIMBATOR.png",
  "Manete Frana":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-FRANA.png",
  Frane:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/FR%C3%82NE.png",
  Rotor:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ROTOR.png",
    Anvelope:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ANVELOPE.png",
  Jante:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/JANTE.png",
  "Butuc Fata":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
  "Butuc Spate":
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
  Mansoane: "https://c.cdnmp.net/183479982/content/DESCRIERI/MANSOANE.png",
  "Pipa Ghidon": "https://c.cdnmp.net/183479982/content/DESCRIERI/PIPA.png",
  Ghidon:
    "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GHIDON.png",
    Sa: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SA.png",
    "Tija Sa":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/TIJA-SA.png",
    Greutate:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GREUTATE.png",
    Accesorii:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ACCESORII.png",
  };

  // Definim ordinea dorită a specificațiilor
  const predefinedSpecs = [
    "Transmisie",
    "Cadru",
    "Suspensie Cadru",
    "Furca",
    "Cuvetarie",
    "Pedalier",
    "Pedale",
    "Pinioane",
    "Lant",
    "Schimbator Spate",
    "Schimbator Fata",
    "Manete Schimbator",
    "Manete Frana",
    "Frane",
    "Rotor",
    "Anvelope",
    "Jante",
    "Butuc Fata",
    "Butuc Spate",
    "Mansoane",
    "Pipa Ghidon",
    "Ghidon",
    "Sa",
    "Tija Sa",
    "Greutate",
    "Accesorii",
  ];


   // Definim o stare pentru mesajul de copiere
   const [copyMessage, setCopyMessage] = useState("Copy");

   // Funcție pentru copierea textului în clipboard
   const copyToClipboard = (text) => {
     navigator.clipboard
       .writeText(text)
       .then(() => {
         setCopyMessage("Copied!"); // Schimbăm textul butonului la "Copied!"
         setTimeout(() => {
           setCopyMessage("Copy"); // Resetăm textul la "Copy" după 2 secunde
         }, 2000);
       })
       .catch((err) => {
         console.error("Clipboard copy failed", err);
       });
   };

  // Funcție care găsește valoarea corespunzătoare pentru fiecare specificație
  const getValueForSpec = (spec) => {
    const foundPair = pairs.find(
      (pair) => pair.key.toLowerCase() === spec.toLowerCase()
    );
    return foundPair ? foundPair.value : "N/A";
  };

  // Funcție care generează HTML-ul pentru fiecare specificație
  const generateSpecHTML = () => {
    return predefinedSpecs
      .map((spec) => {
        const value = getValueForSpec(spec);
        const imageUrl =
          specImages[spec] ||
          "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png"; // Imagine default dacă nu există în lista de URL-uri
        return `
        <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
          <span style="box-sizing: border-box; display: block; min-width: 65px;">
            <a class="thickbox pictureName">
              <img src="${imageUrl}" alt="${spec}" width="55" height="55" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
            </a>
            <br />
          </span>
          <div style="box-sizing: border-box;">
            <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
              <em>${spec}</em>
            </h4>
            <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
              ${value}
            </p>
          </div>
        </li>
      `;
      })
      .join("");
  };
    // Generăm HTML-ul pentru template
    const generatedHTML = `
    <ul>
      ${generateSpecHTML()}
    </ul>
  `;

  const bicicletaElectricaTemplate = `
    <ul class="product__SpecsItems" style="box-sizing: border-box; margin: 0px; padding: 25px 0px 133px; list-style-type: none; column-count: 1; column-gap: 60px; background-color: #ffffff;">
      ${generateSpecHTML()}
    </ul>
  `;

  return (
    <div className="text-gray-800">
      <div className="flex mb-4 justify-between">
        <h2 className="text-2xl font-semibold">HTML template</h2>
        <button
          className="bg-gray-200 rounded-md hover:bg-gray-300 px-8"
          onClick={() => copyToClipboard(generatedHTML)} // Către funcția de copiere
        >
          {copyMessage} {/* Afișăm mesajul în buton */}
        </button>
      </div>
      <textarea
        className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
        style={{
          height: "200px",
          resize: "both",
          overflowY: "auto",
        }}
        value={bicicletaElectricaTemplate}
        readOnly
      />
    </div>
  );
};

export default BicicletaElectricaTemplate;
