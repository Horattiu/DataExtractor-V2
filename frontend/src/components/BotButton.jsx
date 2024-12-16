// import React, { useState } from "react";

// const BotButton = () => {
//   // Textul prestabilit pe care vrei să-l copiezi
//   const textToCopy = `<div></div>
// <p></p>
// <p><iframe width="375px" height="720px" src="https://bikesizing.cube.eu/iframe/cube/{SKU}/{NAME}/?language=en&amp;color=%23bd2121" frameborder="920px" allowfullscreen="allowfullscreen" data-cube-sizing-iframe=""></iframe></p>`;
//   // Mesajul care va apărea atunci când se face copierea
//   const [copyMessage, setCopyMessage] = useState("Copy Bot");

//   // Funcția care va copia textul în clipboard
//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(() => {
//         // Modifică mesajul pentru a arăta că s-a copiat cu succes
//         setCopyMessage("Copied!");
//         // Resetează mesajul înapoi la "Copy Bot" după 2 secunde
//         setTimeout(() => {
//           setCopyMessage("Copy Bot");
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error("Clipboard copy failed", err);
//       });
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: "relative", // Plasăm butonul în mod absolut
//           bottom: "", // La 20px de marginea de jos
//           left: "50%", // Centrat orizontal
//           zIndex: 10, // Asigurăm că este deasupra altor elemente
//           cursor: "pointer", // Adăugăm cursorul pointer pentru interactivitate
//           display: "inline-block", // Să se comporte ca un buton de tip bloc
//         }}
//         onClick={copyToClipboard}
//       >
//         {/* Umbra circulară cu gradient */}
//         <div
//           style={{
//             position: "",
//             top: "50%",
//             left: "50%",
//             width: "140px", // Dimensiune umbra
//             height: "140px",
//             background:
//               "radial-gradient(circle, rgba(0, 123, 255, 0.5) 0%, rgba(0, 123, 255, 1) 70%)", // Gradient circular
//             borderRadius: "50%", // Umbra circulară
//             opacity: 0, // Umbra invizibilă la început
//             zIndex: 0, // Umbra să fie sub imagine
//           }}
//           className="shadow"
//         />

//         {/* Imaginea robotului */}
//         <img
//           src="/robot2.png" // Calea către imaginea ta din public
//           alt={copyMessage}
//           style={{
//             width: "50px", // Dimensiune mică pentru robot
//             height: "50px", // Dimensiune mică pentru robot
//             position: "absolute", // Poziționăm imaginea relativ la div-ul părinte
//             top: "0%",
//             left: "10%",
//             zIndex: 1, // Imaginea va fi deasupra umbrei
//           }}
//           onMouseEnter={(e) => {
//             // La hover, activăm umbra și mărim imaginea
//             const shadow = e.target.closest("div").querySelector(".shadow");
//             shadow.style.opacity = 1; // Activăm umbra
//             e.target.style.transform = "translate(-50%, -50%) scale(1.2)"; // Mărim imaginea la hover
//           }}
//           onMouseLeave={(e) => {
//             // Când mouse-ul părăsește imaginea, resetăm totul
//             const shadow = e.target.closest("div").querySelector(".shadow");
//             shadow.style.opacity = 0; // Ascundem umbra
//             e.target.style.transform = "translate(-50%, -50%) scale(1)"; // Restabilim dimensiunea imaginii
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default BotButton;

// import React, { useState } from "react";

// const BotButton = () => {
//   // State pentru valorile SKU și NAME
//   const [sku, setSku] = useState("");
//   const [name, setName] = useState("");

//   // Mesajul care va apărea atunci când se face copierea
//   const [copyMessage, setCopyMessage] = useState("Copy Bot");

//   // Funcția care va genera textul dinamic
//   const generateTextToCopy = () => {
//     return `<iframe width="375px" height="720px" src="https://bikesizing.cube.eu/iframe/cube/${sku}/${name}/?language=en&amp;color=%23bd2121" frameborder="920px" allowfullscreen="allowfullscreen" data-cube-sizing-iframe=""></iframe>`;
//   };

//   // Funcția care va copia textul în clipboard
//   const copyToClipboard = () => {
//     const textToCopy = generateTextToCopy(); // Generăm textul dinamic
//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(() => {
//         // Modifică mesajul pentru a arăta că s-a copiat cu succes
//         setCopyMessage("Copied!");
//         // Resetează mesajul înapoi la "Copy Bot" după 2 secunde
//         setTimeout(() => {
//           setCopyMessage("Copy Bot");
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error("Clipboard copy failed", err);
//       });
//   };

//   return (
//     <div style={{ textAlign: "center", margin: "20px" }}>
//       {/* Input pentru SKU */}
//       <div>
//         <label>
//           SKU:{" "}
//           <input
//             type="text"
//             value={sku}
//             onChange={(e) => setSku(e.target.value)}
//             placeholder="Enter SKU"
//             style={{
//               margin: "5px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </label>
//       </div>

//       {/* Input pentru NAME */}
//       <div>
//         <label>
//           Name:{" "}
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Name"
//             style={{
//               margin: "5px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           />
//         </label>
//       </div>

//       {/* Butonul cu robot */}
//       <div
//         style={{
//           position: "relative",
//           display: "inline-block",
//           marginTop: "20px",
//           cursor: "pointer",
//         }}
//         onClick={copyToClipboard}
//       >
//         {/* Imaginea robotului */}
//         <img
//           src="/robot.png" // Calea către imaginea robotului
//           alt={copyMessage}
//           style={{
//             width: "50px",
//             height: "50px",
//           }}
//         />
//       </div>

//       {/* Mesajul de copiere */}
//       <div
//         style={{
//           marginTop: "10px",
//           fontSize: "14px",
//           color: copyMessage === "Copied!" ? "green" : "black",
//         }}
//       >
//         {copyMessage}
//       </div>
//     </div>
//   );
// };

// export default BotButton;

import React, { useState } from "react";

const BotButton = () => {
  // State pentru valorile SKU și NAME
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");

  // Mesajul care va apărea atunci când se face copierea
  const [copyMessage, setCopyMessage] = useState("");

  // Funcția care va genera textul dinamic
  const generateTextToCopy = () => {
    return `<br></br>
    <iframe width="375px" height="720px" src="https://bikesizing.cube.eu/iframe/cube/${sku}/${name}/?language=en&amp;color=%23bd2121" frameborder="920px" allowfullscreen="allowfullscreen" data-cube-sizing-iframe=""></iframe>`;
  };

  // Funcția care va copia textul în clipboard
  const copyToClipboard = () => {
    const textToCopy = generateTextToCopy(); // Generăm textul dinamic
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Modifică mesajul pentru a arăta că s-a copiat cu succes
        setCopyMessage("Copied!");
        // Resetează mesajul înapoi la "Copy Bot" după 2 secunde
        setTimeout(() => {
          setCopyMessage("");
        }, 2000);
      })
      .catch((err) => {
        console.error("Clipboard copy failed", err);
      });
  };

  return (
    <div className="flex items-center justify-center   space-x-4 p-6 ">
      {/* Input pentru SKU */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">
          SKU:
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="Enter SKU"
            className="w-full px-3 bg-white py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Input pentru NAME */}
      <div className="flex flex-col">
        <label className="mb-2 font-medium text-gray-700">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="w-full bg-white px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      {/* Butonul cu robot */}
      <div
        className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
        onClick={copyToClipboard}
      >
        <img
          src="/robot.png" // Calea către imaginea robotului
          alt={copyMessage}
          className="w-12 h-12"
        />
      </div>

      {/* Mesajul de copiere */}
      <div
        className={`text-sm font-semibold ${
          copyMessage === "Copied!" ? "text-green-600" : "text-gray-700"
        }`}
      >
        {copyMessage}
      </div>
    </div>
  );
};

export default BotButton;
