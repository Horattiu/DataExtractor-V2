import React, { useState } from "react";

const BotButton = () => {
  // Textul prestabilit pe care vrei să-l copiezi
  const textToCopy = `<p><iframe width="375px" height="720px" src="https://bikesizing.cube.eu/iframe/cube/634161/E-BIKE%20CUBE%20REACTION%20HYBRID%20PRO%20500%20Flashwhite%20Black%202023/?language=en&color=%23bd2121" frameborder="0" allowfullscreen="allowfullscreen" data-cube-sizing-iframe=""></iframe></p>`;
  // Mesajul care va apărea atunci când se face copierea
  const [copyMessage, setCopyMessage] = useState("Copy Bot");

  // Funcția care va copia textul în clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Modifică mesajul pentru a arăta că s-a copiat cu succes
        setCopyMessage("Copied!");
        // Resetează mesajul înapoi la "Copy Bot" după 2 secunde
        setTimeout(() => {
          setCopyMessage("Copy Bot");
        }, 2000);
      })
      .catch((err) => {
        console.error("Clipboard copy failed", err);
      });
  };

  return (
    <div
      style={{
        position: "absolute", // Plasăm butonul în mod absolut
        bottom: "80px", // La 20px de marginea de jos
        left: "50%", // Centrat orizontal
        transform: "translateX(-50%)", // Centrare exactă
        zIndex: 10, // Asigurăm că este deasupra altor elemente
        cursor: "pointer", // Adăugăm cursorul pointer pentru interactivitate
        display: "inline-block", // Să se comporte ca un buton de tip bloc
      }}
      onClick={copyToClipboard}
    >
      {/* Umbra circulară cu gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "140px", // Dimensiune umbra
          height: "140px",
          background: "radial-gradient(circle, rgba(0, 123, 255, 0.5) 0%, rgba(0, 123, 255, 1) 70%)", // Gradient circular
          borderRadius: "50%", // Umbra circulară
          transform: "translate(-50%, -85%)", // Centrăm umbra
          opacity: 0, // Umbra invizibilă la început
          transition: "opacity 0.3s ease, transform 0.3s ease", // Tranziție pentru umbră
          zIndex: 0, // Umbra să fie sub imagine
        }}
        className="shadow"
      />

      {/* Imaginea robotului */}
      <img
        src="/robot2.png" // Calea către imaginea ta din public
        alt={copyMessage}
        style={{
          width: "100px", // Dimensiune mică pentru robot
          height: "100px", // Dimensiune mică pentru robot
          position: "relative", // Poziționăm imaginea relativ la div-ul părinte
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centrăm imaginea
          zIndex: 1, // Imaginea va fi deasupra umbrei
          transition: "transform 0.3s ease", // Tranziție pentru mărirea imaginii
        }}
        onMouseEnter={(e) => {
          // La hover, activăm umbra și mărim imaginea
          const shadow = e.target.closest("div").querySelector(".shadow");
          shadow.style.opacity = 1; // Activăm umbra
          e.target.style.transform = "translate(-50%, -50%) scale(1.2)"; // Mărim imaginea la hover
        }}
        onMouseLeave={(e) => {
          // Când mouse-ul părăsește imaginea, resetăm totul
          const shadow = e.target.closest("div").querySelector(".shadow");
          shadow.style.opacity = 0; // Ascundem umbra
          e.target.style.transform = "translate(-50%, -50%) scale(1)"; // Restabilim dimensiunea imaginii
        }}
      />
    </div>
  );
};

export default BotButton;
