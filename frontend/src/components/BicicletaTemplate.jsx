// import React from "react";
// import { useState } from "react";

// const BicicletaElectricaTemplate = ({ pairs }) => {
//   // Definim o listă completă a specificațiilor cu linkurile corespunzătoare
//   const specImages = {
//     Transmisie: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",

//     Cadru: "https://c.cdnmp.net/183479982/content/DESCRIERI/CADRU.png",
//     "Suspensie Cadru":
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/SUSPENSIE-CADRU.png",
//     Furca: "https://c.cdnmp.net/183479982/content/DESCRIERI/FURCA.png",
//     Cuvetarie:
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/CUVET%C4%82RIE.png",
//     Pedalier: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
//     Pedale: "https://cdn13.avanticart.ro/marosbike.ro/pictures/product-cms/PEDALE.png",
//     Pinioane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/PINIOANE.png",
//     Lant: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/LANT.png",
//     "Schimbator Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-SPATE.png",
//     "Schimbator Fata":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-FA%C8%9A%C4%82.png",
//     "Manete Schimbator":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-SCHIMBATOR.png",
//     "Manete Frana":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-FRANA.png",
//     Frane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/FR%C3%82NE.png",
//     Rotor: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ROTOR.png",
//     Anvelope:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ANVELOPE.png",
//     Jante: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/JANTE.png",
//     "Butuc Fata":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     "Butuc Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     Mansoane: "https://c.cdnmp.net/183479982/content/DESCRIERI/MANSOANE.png",
//     "Pipa Ghidon": "https://c.cdnmp.net/183479982/content/DESCRIERI/PIPA.png",
//     Ghidon: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GHIDON.png",
//     Sa: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SA.png",
//     "Tija Sa":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/TIJA-SA.png",
//     Greutate:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GREUTATE.png",
//     Accesorii:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ACCESORII.png",
//   };

//   // Definim ordinea dorită a specificațiilor
//   const predefinedSpecs = [
//     "Transmisie",
//     "Cadru",
//     "Suspensie Cadru",
//     "Furca",
//     "Cuvetarie",
//     "Pedalier",
//     "Pedale",
//     "Pinioane",
//     "Lant",
//     "Schimbator Spate",
//     "Schimbator Fata",
//     "Manete Schimbator",
//     "Manete Frana",
//     "Frane",
//     "Rotor",
//     "Anvelope",
//     "Jante",
//     "Butuc Fata",
//     "Butuc Spate",
//     "Mansoane",
//     "Pipa Ghidon",
//     "Ghidon",
//     "Sa",
//     "Tija Sa",
//     "Greutate",
//     "Accesorii",
//   ];


//   const synonyms = {
//     Rotor: ["sistem franare", "discuri frana"],
//     Cuvetarie: ["cuvete"],
//     Pedalier: ["angrenaj (foi)"],
//     "Schimbator Spate": ["schimbator pinioane"],
//     "Schimbator Fata": ["schimbator foi"],
//     // alte sinonime necesare
//   };

//   const [copyMessage, setCopyMessage] = useState("Copy");

//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         setCopyMessage("Copied!");
//         setTimeout(() => {
//           setCopyMessage("Copy");
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error("Clipboard copy failed", err);
//       });
//   };

//   // Funcție care găsește valoarea corespunzătoare pentru fiecare specificație, inclusiv sinonimele
//   const getValueForSpec = (spec) => {
//     let foundPair = pairs.find(
//       (pair) => pair.key.toLowerCase() === spec.toLowerCase()
//     );

//     if (!foundPair && synonyms[spec]) {
//       for (let synonym of synonyms[spec]) {
//         foundPair = pairs.find(
//           (pair) => pair.key.toLowerCase() === synonym.toLowerCase()
//         );
//         if (foundPair) break;
//       }
//     }

//     // Regula pentru "Chain guide"
//     if (spec === "Accesorii") {
//       const chainGuidePair = pairs.find(
//         (pair) => pair.key.toLowerCase() === "chain guide"
//       );

//       if (chainGuidePair) {
//         return foundPair
//           ? `${foundPair.value}, ${chainGuidePair.value}`
//           : chainGuidePair.value;
//       }
//     }

//     return foundPair ? foundPair.value : "N/A";
//   };

//   // const generateSpecHTML = () => {
//   //   return predefinedSpecs
//   //     .map((spec) => {
//   //       const value = getValueForSpec(spec);
//   //       const imageUrl =
//   //         specImages[spec] ||
//   //         "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
//   //       return `
//   //         <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
//   //           <span style="box-sizing: border-box; display: block; min-width: 65px;">
//   //             <a class="thickbox pictureName">
//   //               <img src="${imageUrl}" alt="${spec}" width="50" height="50" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
//   //             </a>
//   //             <br />
//   //           </span>
//   //           <div style="box-sizing: border-box;">
//   //             <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
//   //               <em>${spec}</em>
//   //             </h4>
//   //             <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
//   //               ${value}
//   //             </p>
//   //           </div>
//   //         </li>
//   //       `;
//   //     })
//   //     .join("");
//   // };

//   const generateSpecHTML = () => {
//     return predefinedSpecs
//       .map((spec) => {
//         const value = getValueForSpec(spec);
//         const imageUrl =
//           specImages[spec] ||
//           "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
  
//         // Setăm dimensiunile pentru Transmisie
//         const imageWidth = spec === "Transmisie" ? "50" : "55";  // Dimensiuni personalizate pentru Transmisie
//         const imageHeight = spec === "Transmisie" ? "40" : "55"; // Dimensiuni personalizate pentru Transmisie
  
//         return `
//           <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
//             <span style="box-sizing: border-box; display: block; min-width: 65px;">
//               <a class="thickbox pictureName">
//                 <img src="${imageUrl}" alt="${spec}" width="${imageWidth}" height="${imageHeight}" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
//               </a>
//               <br />
//             </span>
//             <div style="box-sizing: border-box;">
//               <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
//                 <em>${spec}</em>
//               </h4>
//               <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
//                 ${value}
//               </p>
//             </div>
//           </li>
//         `;
//       })
//       .join("");
//   };
  
//   const bicicletaElectricaTemplate = `
//     <ul class="product__SpecsItems" style="box-sizing: border-box; margin: 0px; padding: 25px 0px 133px; list-style-type: none; column-count: 1; column-gap: 60px; background-color: #ffffff;">
//       ${generateSpecHTML()}
//     </ul>
//   `;

//   return (
//     <div className="text-gray-800">
//       <div className="flex mb-4 justify-between">
//         <h2 className="text-2xl font-semibold">HTML template</h2>
//         <button
//           className="bg-gray-200 rounded-md hover:bg-gray-300 px-8"
//           onClick={() => copyToClipboard(bicicletaElectricaTemplate)}
//         >
//           {copyMessage}
//         </button>
//       </div>
//       <textarea
//         className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//         style={{
//           height: "200px",
//           resize: "both",
//           overflowY: "auto",
//         }}
//         value={bicicletaElectricaTemplate}
//         readOnly
//       />
//     </div>
//   );
// };

// export default BicicletaElectricaTemplate;


// import React, { useState } from "react";

// const BicicletaTemplate = ({ pairs }) => {
//   // Definim o listă completă a specificațiilor cu linkurile corespunzătoare
//   const specImages = {
//     Transmisie: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
//     Cadru: "https://c.cdnmp.net/183479982/content/DESCRIERI/CADRU.png",
//     "Suspensie Cadru":
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/SUSPENSIE-CADRU.png",
//     Furca: "https://c.cdnmp.net/183479982/content/DESCRIERI/FURCA.png",
//     Cuvetarie:
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/CUVET%C4%82RIE.png",
//     Pedalier: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
//     Pedale: "https://cdn13.avanticart.ro/marosbike.ro/pictures/product-cms/PEDALE.png",
//     Pinioane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/PINIOANE.png",
//     Lant: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/LANT.png",
//     "Schimbator Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-SPATE.png",
//     "Schimbator Fata":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-FA%C8%9A%C4%82.png",
//     "Manete Schimbator":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-SCHIMBATOR.png",
//     "Manete Frana":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-FRANA.png",
//     Frane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/FR%C3%82NE.png",
//     Rotor: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ROTOR.png",
//     Anvelope:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ANVELOPE.png",
//     Jante: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/JANTE.png",
//     "Butuc Fata":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     "Butuc Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     Mansoane: "https://c.cdnmp.net/183479982/content/DESCRIERI/MANSOANE.png",
//     "Pipa Ghidon": "https://c.cdnmp.net/183479982/content/DESCRIERI/PIPA.png",
//     Ghidon: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GHIDON.png",
//     Sa: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SA.png",
//     "Tija Sa":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/TIJA-SA.png",
//     Greutate:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GREUTATE.png",
//     Accesorii:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ACCESORII.png",
//   };

//   // Definim ordinea dorită a specificațiilor
//   const predefinedSpecs = [
//     "Transmisie",
//     "Cadru",
//     "Suspensie Cadru",
//     "Furca",
//     "Cuvetarie",
//     "Pedalier",
//     "Pedale",
//     "Pinioane",
//     "Lant",
//     "Schimbator Spate",
//     "Schimbator Fata",
//     "Manete Schimbator",
//     "Manete Frana",
//     "Frane",
//     "Rotor",
//     "Anvelope",
//     "Jante",
//     "Butuc Fata",
//     "Butuc Spate",
//     "Mansoane",
//     "Pipa Ghidon",
//     "Ghidon",
//     "Sa",
//     "Tija Sa",
//     "Greutate",
//     "Accesorii",
//   ];

//   const synonyms = {
//     Rotor: ["sistem franare", "discuri frana"],
//     Cuvetarie: ["cuvete"],
//     Pedalier: ["angrenaj (foi)"],
//     "Schimbator Spate": ["schimbator pinioane"],
//     "Schimbator Fata": ["schimbator foi"],
//     // alte sinonime necesare
//   };

//   const [copyMessage, setCopyMessage] = useState("Copy");

//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         setCopyMessage("Copied!");
//         setTimeout(() => {
//           setCopyMessage("Copy");
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error("Clipboard copy failed", err);
//       });
//   };

//   // Funcție care găsește valoarea corespunzătoare pentru fiecare specificație, inclusiv sinonimele
//   const getValueForSpec = (spec) => {
//     let foundPair = pairs.find(
//       (pair) => pair.key.toLowerCase() === spec.toLowerCase()
//     );

//     if (!foundPair && synonyms[spec]) {
//       for (let synonym of synonyms[spec]) {
//         foundPair = pairs.find(
//           (pair) => pair.key.toLowerCase() === synonym.toLowerCase()
//         );
//         if (foundPair) break;
//       }
//     }

//     // Regula pentru "Chain guide"
//     if (spec === "Accesorii") {
//       const chainGuidePair = pairs.find(
//         (pair) => pair.key.toLowerCase() === "chain guide"
//       );

//       if (chainGuidePair) {
//         return foundPair
//           ? `${foundPair.value}, ${chainGuidePair.value}`
//           : chainGuidePair.value;
//       }
//     }

//     return foundPair ? foundPair.value : "N/A";
//   };

//   // const generateSpecHTML = () => {
//   //   return predefinedSpecs
//   //     .map((spec) => {
//   //       const value = getValueForSpec(spec);
//   //       const imageUrl =
//   //         specImages[spec] ||
//   //         "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
  
//   //       // Setăm dimensiunile pentru Transmisie
//   //       const imageWidth = spec === "Transmisie" ? "50" : "55";  // Dimensiuni personalizate pentru Transmisie
//   //       const imageHeight = spec === "Transmisie" ? "40" : "55"; // Dimensiuni personalizate pentru Transmisie
  

        
//   //       return `
//   //         <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
//   //           <span style="box-sizing: border-box; display: block; min-width: 65px;">
//   //             <a class="thickbox pictureName">
//   //               <img src="${imageUrl}" alt="${spec}" width="${imageWidth}" height="${imageHeight}" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
//   //             </a>
//   //             <br />
//   //           </span>
//   //           <div style="box-sizing: border-box;">
//   //             <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
//   //               <em>${spec}</em>
//   //             </h4>
//   //             <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
//   //               ${value}
//   //             </p>
//   //           </div>
//   //         </li>
//   //       `;
//   //     })
//   //     .join("");
//   // };
//   const generateSpecHTML = () => {
//     return predefinedSpecs
//       .map((spec) => {
//         const value = getValueForSpec(spec);
//         const imageUrl =
//           specImages[spec] ||
//           "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
  
//         // Setăm dimensiunile pentru Transmisie și Pedalier
//         let imageWidth = "50"; // Dimensiunea implicită
//         let imageHeight = "50"; // Dimensiunea implicită
  
//         if (spec === "Transmisie") {
//           imageWidth = "50";
//           imageHeight = "40";
//         } else if (spec === "Pedalier") {
//           imageWidth = "52";  // Exemplu de dimensiune personalizată pentru Pedalier
//           imageHeight = "39"; // Exemplu de dimensiune personalizată pentru Pedalier
//         }
  
//         return `
//           <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
//             <span style="box-sizing: border-box; display: block; min-width: 65px;">
//               <a class="thickbox pictureName">
//                 <img src="${imageUrl}" alt="${spec}" width="${imageWidth}" height="${imageHeight}" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
//               </a>
//               <br />
//             </span>
//             <div style="box-sizing: border-box;">
//               <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
//                 <em>${spec}</em>
//               </h4>
//               <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
//                 ${value}
//               </p>
//             </div>
//           </li>
//         `;
//       })
//       .join("");
//   };


//   const bicicletaTemplate = `
//     <ul class="product__SpecsItems" style="box-sizing: border-box; margin: 0px; padding: 25px 0px 133px; list-style-type: none; column-count: 1; column-gap: 60px; background-color: #ffffff;">
//       ${generateSpecHTML()}
//     </ul>
//   `;

//   return (
//     <div className="text-gray-800">
//       <div className="flex mb-4 justify-between">
//         <h2 className="text-2xl font-semibold">HTML template</h2>
//         <button
//           className="bg-gray-200 rounded-md hover:bg-gray-300 px-8"
//           onClick={() => copyToClipboard(bicicletaTemplate)}
//         >
//           {copyMessage}
//         </button>
//       </div>
//       <textarea
//         className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//         style={{
//           height: "200px",
//           resize: "both",
//           overflowY: "auto",
//         }}
//         value={bicicletaTemplate}
//         readOnly
//       />
//     </div>
//   );
// };

// export default BicicletaTemplate;



// import React, { useState } from "react";

// const BicicletaTemplate = ({ pairs }) => {
//   // Definim o listă completă a specificațiilor cu linkurile corespunzătoare
//   const specImages = {
//     Transmisie: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
//     Cadru: "https://c.cdnmp.net/183479982/content/DESCRIERI/CADRU.png",
//     "Suspensie Cadru":
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/SUSPENSIE-CADRU.png",
//     Furcă: "https://c.cdnmp.net/183479982/content/DESCRIERI/FURCA.png",
//     Cuvetărie:
//       "https://c.cdnmp.net/183479982/content/DESCRIERI/CUVET%C4%82RIE.png",
//     Pedalier: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
//     Pedale: "https://cdn13.avanticart.ro/marosbike.ro/pictures/product-cms/PEDALE.png",
//     Pinioane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/PINIOANE.png",
//     Lanț: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/LANT.png",
//     "Schimbător Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-SPATE.png",
//     "Schimbător Fată":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-FA%C8%9A%C4%82.png",
//     "Manete Schimbător":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-SCHIMBATOR.png",
//     "Manete Frână":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-FRANA.png",
//     Frane:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/FR%C3%82NE.png",
//     Rotor: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ROTOR.png",
//     Anvelope:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ANVELOPE.png",
//     Jante: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/JANTE.png",
//     "Butuc Fată":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     "Butuc Spate":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
//     Manșoane: "https://c.cdnmp.net/183479982/content/DESCRIERI/MANSOANE.png",
//     "Pipă Ghidon": "https://c.cdnmp.net/183479982/content/DESCRIERI/PIPA.png",
//     Ghidon: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GHIDON.png",
//     Șa: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SA.png",
//     "Tijă Șa":
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/TIJA-SA.png",
//     Greutate:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GREUTATE.png",
//     Accesorii:
//       "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ACCESORII.png",
//   };

//   const predefinedSpecs = [
//     "Transmisie",
//     "Cadru",
//     "Suspensie Cadru",
//     "Furcă",
//     "Cuvetărie",
//     "Pedalier",
//     "Pedale",
//     "Pinioane",
//     "Lanț",
//     "Schimbător Spate",
//     "Schimbător Fată",
//     "Manete Schimbător",
//     "Manete Frână",
//     "Frâne",
//     "Rotor",
//     "Anvelope",
//     "Jante",
//     "Butuc Fată",
//     "Butuc Spate",
//     "Manșoane",
//     "Pipă Ghidon",
//     "Ghidon",
//     "Șa",
//     "Tijă Șa",
//     "Greutate",
//     "Accesorii",
//   ];

//   const synonyms = {
//     Rotor: ["sistem franare", "discuri frana"],
//     Cuvetarie: ["cuvete"],
//     Pedalier: ["angrenaj (foi)"],
//     "Schimbator Spate": ["schimbator pinioane"],
//     "Schimbator Fata": ["schimbator foi"],
//   };

//   const [copyMessage, setCopyMessage] = useState("Copy");

//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         setCopyMessage("Copied!");
//         setTimeout(() => {
//           setCopyMessage("Copy");
//         }, 2000);
//       })
//       .catch((err) => {
//         console.error("Clipboard copy failed", err);
//       });
//   };

//   const removeDiacritics = (str) => {
//     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//   };
  
//   const getValueForSpec = (spec) => {
//     // Normalizăm spec-ul (eliminăm diacriticele și punem totul la minuscule)
//     const normalizedSpec = removeDiacritics(spec.toLowerCase());
  
//     // Căutăm spec-ul în lista de pairs
//     let foundPair = pairs.find((pair) => {
//       // Normalizăm key-ul din pair și comparăm
//       const normalizedKey = removeDiacritics(pair.key.toLowerCase());
//       return normalizedKey === normalizedSpec;
//     });
  
//     // Dacă nu găsim o potrivire exactă și există sinonime pentru acest spec
//     if (!foundPair && synonyms[spec]) {
//       for (let synonym of synonyms[spec]) {
//         const normalizedSynonym = removeDiacritics(synonym.toLowerCase());
//         foundPair = pairs.find(
//           (pair) => removeDiacritics(pair.key.toLowerCase()) === normalizedSynonym
//         );
//         if (foundPair) break;  // Dacă găsim un synonym valid, ieșim din buclă
//       }
//     }
  
//     // Dacă spec-ul este "Accesorii", verificăm și combinăm cu "Chain Guide"
//     if (normalizedSpec === removeDiacritics("accesorii")) {
//       const chainGuidePair = pairs.find(
//         (pair) => removeDiacritics(pair.key.toLowerCase()) === "chain guide"
//       );
//       if (chainGuidePair) {
//         return foundPair
//           ? `${foundPair.value}, ${chainGuidePair.value}`
//           : chainGuidePair.value;
//       }
//     }
  
//     // Returnăm valoarea găsită sau "N/A" dacă nu am găsit nimic
//     return foundPair ? foundPair.value : "N/A";
//   };
  

//   const generateSpecHTML = () => {
//     return predefinedSpecs
//       .map((spec) => {
//         const value = getValueForSpec(spec);
//         const imageUrl =
//           specImages[spec] ||
//           "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
  
//         let imageWidth = "50"; // Dimensiunea implicită
//         let imageHeight = "50"; // Dimensiunea implicită
  
//         if (spec === "Transmisie") {
//           imageWidth = "50";
//           imageHeight = "40";
//         } else if (spec === "Pedalier") {
//           imageWidth = "52";  // Exemplu de dimensiune personalizată pentru Pedalier
//           imageHeight = "39"; // Exemplu de dimensiune personalizată pentru Pedalier
//         }else if (spec === 'Greutate') {
//           imageWidth = "42";  // Exemplu de dimensiune personalizată pentru Pedalier
//           imageHeight = "42"; // Exemplu de dimensiune personalizată pentru Pedalier
//         }else if (spec === 'Accesorii') {
//           imageWidth = "45";  // Exemplu de dimensiune personalizată pentru Pedalier
//           imageHeight = "42"; // Exemplu de dimensiune personalizată pentru Pedalier
//         }
        
//         return `
//           <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
//             <span style="box-sizing: border-box; display: block; min-width: 65px;">
//               <a class="thickbox pictureName">
//                 <img src="${imageUrl}" alt="${spec}" width="${imageWidth}" height="${imageHeight}" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
//               </a>
//               <br />
//             </span>
//             <div style="box-sizing: border-box;">
//               <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;">
//                 <em>${spec}</em>
//               </h4>
//               <p style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38;">
//                 ${value}
//               </p>
//             </div>
//           </li>
//         `;
//       })
//       .join("");
//   };

//   const bicicletaTemplate = `
//     <ul class="product__SpecsItems" style="box-sizing: border-box; margin: 0px; padding: 25 px 0px 133px; list-style-type: none; column-count: 1; column-gap: 60px; background-color: #ffffff;">
//     <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;"><span style="font-size: 14pt;"><em>SPECIFICAȚII TEHNICE</em></span></h4>
//       ${generateSpecHTML()}
//     </ul>
//   `;

//   return (
//     <div className="text-gray-800">
//       <div className="flex mb-4 justify-between">
//         <h2 className="text-2xl font-semibold">HTML template</h2>
//         <button
//           className="bg-gray-200 rounded-md hover:bg-gray-300 px-8"
//           onClick={() => copyToClipboard(bicicletaTemplate)}
//         >
//           {copyMessage}
//         </button>
//       </div>
//       <textarea
//         className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//         style={{
//           height: "200px",
//           resize: "both",
//           overflowY: "auto",
//         }}
//         value={bicicletaTemplate}
//         readOnly
//       />
//     </div>
//   );
// };

// export default BicicletaTemplate;


import React, { useState } from "react";

const BicicletaTemplate = ({ pairs }) => {
  // Definim o listă completă a specificațiilor cu linkurile corespunzătoare
  const specImages = {
    Transmisie: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
    Cadru: "https://c.cdnmp.net/183479982/content/DESCRIERI/CADRU.png",
    "Suspensie Cadru":
      "https://c.cdnmp.net/183479982/content/DESCRIERI/SUSPENSIE-CADRU.png",
    Furcă: "https://c.cdnmp.net/183479982/content/DESCRIERI/FURCA.png",
    Cuvetărie:
      "https://c.cdnmp.net/183479982/content/DESCRIERI/CUVET%C4%82RIE.png",
    Pedalier: "https://c.cdnmp.net/183479982/content/DESCRIERI/PEDALIER.png",
    Pedale: "https://cdn13.avanticart.ro/marosbike.ro/pictures/product-cms/PEDALE.png",
    Pinioane:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/PINIOANE.png",
    Lanț: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/LANT.png",
    "Schimbător Spate":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-SPATE.png",
    "Schimbător Fată":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SCHIMBATOR-FA%C8%9A%C4%82.png",
    "Manete Schimbător":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-SCHIMBATOR.png",
    "Manete Frână":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/MANETE-FRANA.png",
    Frâne:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/FR%C3%82NE.png",
    Rotor: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ROTOR.png",
    Anvelope:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ANVELOPE.png",
    Jante: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/JANTE.png",
    "Butuc Fată":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
    "Butuc Spate":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/BUTUC.png",
    Manșoane: "https://c.cdnmp.net/183479982/content/DESCRIERI/MANSOANE.png",
    "Pipă Ghidon": "https://c.cdnmp.net/183479982/content/DESCRIERI/PIPA.png",
    Ghidon: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GHIDON.png",
    Șa: "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/SA.png",
    "Tijă Șa":
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/TIJA-SA.png",
    Greutate:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/GREUTATE.png",
    Accesorii:
      "https://cdn13.avanticart.ro/marosbike.ro/pictures/cms/ACCESORII.png",
  };

  const predefinedSpecs = [
    "Transmisie",
    "Cadru",
    "Suspensie Cadru",
    "Furcă",
    "Cuvetărie",
    "Pedalier",
    "Pedale",
    "Pinioane",
    "Lanț",
    "Schimbător Spate",
    "Schimbător Fată",
    "Manete Schimbător",
    "Manete Frână",
    "Frâne",
    "Rotor",
    "Anvelope",
    "Jante",
    "Butuc Fată",
    "Butuc Spate",
    "Manșoane",
    "Pipă Ghidon",
    "Ghidon",
    "Șa",
    "Tijă Șa",
    "Greutate",
    "Accesorii",
  ];

  const synonyms = {
    Rotor: ["sistem franare", "discuri frana"],
    Cuvetărie: ["cuvete"],
    Pedalier: ["angrenaj (foi)"],
    "Schimbător Spate": ["schimbator pinioane"],
    "Schimbător Fata": ["schimbator foi"],
    "Pipă Ghidon": ["pipa ghidon", "pipa"], // Adaugă sinonimele dacă există
  };

  const [copyMessage, setCopyMessage] = useState("Copy");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessage("Copied!");
        setTimeout(() => {
          setCopyMessage("Copy");
        }, 2000);
      })
      .catch((err) => {
        console.error("Clipboard copy failed", err);
      });
  };

  const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const getValueForSpec = (spec) => {
    // Normalizăm spec-ul (eliminăm diacriticele și punem totul la minuscule)
    const normalizedSpec = removeDiacritics(spec.toLowerCase());
    
    // Căutăm spec-ul în lista de pairs
    let foundPair = pairs.find((pair) => {
      const normalizedKey = removeDiacritics(pair.key.toLowerCase());
      return normalizedKey === normalizedSpec;
    });
  
    // Dacă nu găsim o potrivire exactă și există sinonime pentru acest spec
    if (!foundPair && synonyms[spec]) {
      for (let synonym of synonyms[spec]) {
        const normalizedSynonym = removeDiacritics(synonym.toLowerCase());
        foundPair = pairs.find(
          (pair) => removeDiacritics(pair.key.toLowerCase()) === normalizedSynonym
        );
        if (foundPair) break;  // Dacă găsim un synonym valid, ieșim din buclă
      }
    }
  
    // Dacă spec-ul este "Accesorii", verificăm și combinăm cu "Chain Guide"
    if (normalizedSpec === removeDiacritics("accesorii")) {
      const chainGuidePair = pairs.find(
        (pair) => removeDiacritics(pair.key.toLowerCase()) === "chain guide"
      );
      if (chainGuidePair) {
        return foundPair
          ? `${foundPair.value}, ${chainGuidePair.value}`
          : chainGuidePair.value;
      }
    }
  
    // Returnăm valoarea găsită sau "N/A" dacă nu am găsit nimic
    return foundPair ? foundPair.value : "N/A";
  };

  const generateSpecHTML = () => {
    return predefinedSpecs
      .map((spec) => {
        const value = getValueForSpec(spec);
        const imageUrl =
          specImages[spec] ||
          "https://cdn13.avanticart.ro/marosbike.ro/pictures/gallery/Default.png";
  
        let imageWidth = "50"; // Dimensiunea implicită
        let imageHeight = "50"; // Dimensiunea implicită
  
        if (spec === "Transmisie") {
          imageWidth = "50";
          imageHeight = "40";
        } else if (spec === "Pedalier") {
          imageWidth = "52";  // Exemplu de dimensiune personalizată pentru Pedalier
          imageHeight = "39"; // Exemplu de dimensiune personalizată pentru Pedalier
        }else if (spec === 'Greutate') {
          imageWidth = "42";  // Exemplu de dimensiune personalizată pentru Pedalier
          imageHeight = "42"; // Exemplu de dimensiune personalizată pentru Pedalier
        }else if (spec === 'Accesorii') {
          imageWidth = "45";  // Exemplu de dimensiune personalizată pentru Pedalier
          imageHeight = "42"; // Exemplu de dimensiune personalizată pentru Pedalier
        }
        
        return `
          <li style="font-family: 'Times New Roman'; box-sizing: border-box; display: inline-flex; padding: 14px 0px; min-width: 100%; border-bottom: 1px solid #ed1c24;">
            <span style="box-sizing: border-box; display: block; min-width: 65px;">
              <a class="thickbox pictureName">
                <img src="${imageUrl}" alt="${spec}" width="${imageWidth}" height="${imageHeight}" style="box-sizing: border-box; border: 0px; vertical-align: middle; max-width: 200px; max-height: 150px;" />
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

  const bicicletaTemplate = `
    <ul class="product__SpecsItems" style="box-sizing: border-box; margin: 0px; padding: 25 px 0px 133px; list-style-type: none; column-count: 1; column-gap: 60px; background-color: #ffffff;">
    <h4 style="box-sizing: border-box; margin: 0px; font-family: 'Roboto Condensed', sans-serif; font-size: 16px; line-height: 1.38; text-transform: uppercase;"><span style="font-size: 14pt;"><em>SPECIFICAȚII TEHNICE</em></span></h4>
      ${generateSpecHTML()}
    </ul>
  `;

  return (
    <div className="text-gray-800">
      <div className="flex mb-4 justify-between">
        <h2 className="text-2xl font-semibold">HTML template</h2>
        <button
          className="bg-gray-200 rounded-md hover:bg-gray-300 px-8"
          onClick={() => copyToClipboard(bicicletaTemplate)}
        >
          {copyMessage}
        </button>
      </div>
      <textarea
        className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
        style={{
          height: "200px",
          resize: "both",
          overflowY: "auto",
        }}
        value={bicicletaTemplate}
        readOnly
      />
    </div>
  );
};

export default BicicletaTemplate;
