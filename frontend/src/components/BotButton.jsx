import React, { useState } from "react";

const BotButton = () => {
  // Textul prestabilit pe care vrei să-l copiezi
  const textToCopy = `<div></div>
<p></p>
<p><iframe width="375px" height="720px" src="https://bikesizing.cube.eu/iframe/cube/634161/E-BIKE CUBE REACTION HYBRID PRO 500 Flashwhite Black 2023/?language=en&amp;color=%23bd2121" frameborder="920px" allowfullscreen="allowfullscreen" data-cube-sizing-iframe=""></iframe></p>`;
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
    <>
      <div
        style={{
          position: "relative", // Plasăm butonul în mod absolut
          bottom: "", // La 20px de marginea de jos
          left: "50%", // Centrat orizontal
          zIndex: 10, // Asigurăm că este deasupra altor elemente
          cursor: "pointer", // Adăugăm cursorul pointer pentru interactivitate
          display: "inline-block", // Să se comporte ca un buton de tip bloc
        }}
        onClick={copyToClipboard}
      >
        {/* Umbra circulară cu gradient */}
        <div
          style={{
            position: "",
            top: "50%",
            left: "50%",
            width: "140px", // Dimensiune umbra
            height: "140px",
            background:
              "radial-gradient(circle, rgba(0, 123, 255, 0.5) 0%, rgba(0, 123, 255, 1) 70%)", // Gradient circular
            borderRadius: "50%", // Umbra circulară
            opacity: 0, // Umbra invizibilă la început
            zIndex: 0, // Umbra să fie sub imagine
          }}
          className="shadow"
        />

        {/* Imaginea robotului */}
        <img
          src="/robot2.png" // Calea către imaginea ta din public
          alt={copyMessage}
          style={{
            width: "50px", // Dimensiune mică pentru robot
            height: "50px", // Dimensiune mică pentru robot
            position: "absolute", // Poziționăm imaginea relativ la div-ul părinte
            top: "0%",
            left: "10%",
            zIndex: 1, // Imaginea va fi deasupra umbrei
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
    </>
  );
};

export default BotButton;
