// import React, { useState } from "react";
// import MotorTemplate from "./MotorTemplate"; // Importăm componenta de template

// const KeyValueExtractor = () => {
//   const [htmlText, setHtmlText] = useState("");
//   const [pairs, setPairs] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Text HTML introdus:", htmlText);

//     // Extragem perechile cheie-valoare din HTML
//     const extractedData = extractKeyValuePairs(htmlText);
//     console.log("Perechile extrase:", extractedData);

//     // Setăm perechile în stare
//     setPairs(extractedData);
//   };

//   const extractKeyValuePairs = (html) => {
//     const regex =
//       /<td class="param-param.*?">(.*?)<\/td>.*?<td class="param-value.*?">(.*?)<\/td>/g;
//     const keyValuePairs = [];
//     let match;

//     while ((match = regex.exec(html)) !== null) {
//       const key = cleanHTML(match[1].trim());
//       const value = cleanHTML(match[2].trim());
//       keyValuePairs.push({ key, value });
//     }

//     console.log("Perechile cheie-valoare extrase:", keyValuePairs); // Debug pentru extragerea perechilor
//     return keyValuePairs;
//   };

//   const cleanHTML = (htmlString) => {
//     const doc = new DOMParser().parseFromString(htmlString, "text/html");
//     return doc.body.textContent || "";
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg w-2/3">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-4">Extract</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <textarea
//           value={htmlText}
//           onChange={(e) => setHtmlText(e.target.value)}
//           placeholder="Introduceti HTML-ul aici"
//           rows="10"
//           className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//         />
//         <br />
//         <button
//           type="submit"
//           className="w-1/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           generate
//         </button>
//       </form>

//       {/* Afișăm template-ul MOTOR doar după ce a fost procesat */}
//       {pairs.length > 0 && <MotorTemplate pairs={pairs} />}
//     </div>
//   );
// };

// export default KeyValueExtractor;

// import React, { useState } from "react";
// import MotorTemplate from "./MotorTemplate"; // Importăm MotorTemplate

// const KeyValueExtractor = () => {
//   const [htmlText, setHtmlText] = useState("");
//   const [pairs, setPairs] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const extractedData = extractKeyValuePairs(htmlText);
//     setPairs(extractedData);
//   };

//   const extractKeyValuePairs = (html) => {
//     const regex =
//       /<td class="param-param.*?">(.*?)<\/td>.*?<td class="param-value.*?">(.*?)<\/td>/g;
//     const keyValuePairs = [];
//     let match;

//     while ((match = regex.exec(html)) !== null) {
//       const key = cleanHTML(match[1].trim());
//       const value = cleanHTML(match[2].trim());
//       keyValuePairs.push({ key, value });
//     }
//     return keyValuePairs;
//   };

//   const cleanHTML = (htmlString) => {
//     const doc = new DOMParser().parseFromString(htmlString, "text/html");
//     return doc.body.textContent || "";
//   };

//   return (
//     <div className="key-value-extract w-2/5 ">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <textarea
//           value={htmlText}
//           onChange={(e) => setHtmlText(e.target.value)}
//           placeholder="Introduceti HTML-ul aici"
//           rows="10"
//           className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//         />
//         <br />
//         <button
//           type="submit"
//           className="w-1/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           generate
//         </button>
//       </form>

//       {/* Afișăm template-ul MOTOR doar după ce au fost procesate perechile */}
//       {pairs.length > 0 && <MotorTemplate pairs={pairs} />}
//     </div>
//   );
// };

// export default KeyValueExtractor;

// import React, { useState } from "react";

// const KeyValueExtractor = ({ onExtract }) => {
//   const [htmlText, setHtmlText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Extragem perechile cheie-valoare
//     const extractedData = extractKeyValuePairs(htmlText);

//     // Transmiterea datelor la părinte
//     onExtract(extractedData);
//   };

//   const extractKeyValuePairs = (html) => {
//     const regex =
//       /<td class="param-param.*?">(.*?)<\/td>.*?<td class="param-value.*?">(.*?)<\/td>/g;
//     const keyValuePairs = [];
//     let match;

//     while ((match = regex.exec(html)) !== null) {
//       const key = cleanHTML(match[1].trim());
//       const value = cleanHTML(match[2].trim());
//       keyValuePairs.push({ key, value });
//     }

//     return keyValuePairs;
//   };

//   const cleanHTML = (htmlString) => {
//     const doc = new DOMParser().parseFromString(htmlString, "text/html");
//     return doc.body.textContent || "";
//   };

//   return (
//     <div className="space-y-4">
//       <textarea
//         value={htmlText}
//         onChange={(e) => setHtmlText(e.target.value)}
//         placeholder="Introduceti HTML-ul aici"
//         rows="10"
//         className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//       />
//       <button
//         type="submit"
//         onClick={handleSubmit}
//         className="w-1/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//       >
//         Extract
//       </button>
//     </div>
//   );
// };

// export default KeyValueExtractor;

// import React, { useState } from "react";

// const KeyValueExtractor = ({ onExtract }) => {
//   const [htmlText, setHtmlText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Extragem perechile cheie-valoare
//     const extractedData = extractKeyValuePairs(htmlText);

//     // Transmiterea datelor la părinte
//     onExtract(extractedData);
//   };

//   const extractKeyValuePairs = (html) => {
//     const regex =
//       /<td class="param-param.*?">(.*?)<\/td>.*?<td class="param-value.*?">(.*?)<\/td>/g;
//     const keyValuePairs = [];
//     let match;

//     while ((match = regex.exec(html)) !== null) {
//       const key = cleanHTML(match[1].trim());
//       const value = cleanHTML(match[2].trim());
//       keyValuePairs.push({ key, value });
//     }

//     return keyValuePairs;
//   };

//   const cleanHTML = (htmlString) => {
//     const doc = new DOMParser().parseFromString(htmlString, "text/html");
//     return doc.body.textContent || "";
//   };

//   return (
//     <div className="space-y-4">
//       <textarea
//         value={htmlText}
//         onChange={(e) => setHtmlText(e.target.value)}
//         placeholder="Introduceti HTML-ul aici"
//         rows="10"
//         className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
//       />
//       <button
//         type="submit"
//         onClick={handleSubmit}
//         className="w-1/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//       >
//         Extract
//       </button>
//     </div>
//   );
// };

// export default KeyValueExtractor;

import React, { useState } from "react";

const KeyValueExtractor = ({ onExtract }) => {
  const [htmlText, setHtmlText] = useState(""); // Stocăm textul HTML introdus

  // Functia de procesare a inputului la submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extragem perechile cheie-valoare
    const extractedData = extractKeyValuePairs(htmlText);

    // Transmiterea datelor la părinte
    onExtract(extractedData);
  };

  // Functia care extrage perechile cheie-valoare din HTML
  const extractKeyValuePairs = (html) => {
    const regex =
      /<td class="param-param.*?">(.*?)<\/td>.*?<td class="param-value.*?">(.*?)<\/td>/g;
    const keyValuePairs = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      const key = cleanHTML(match[1].trim());
      const value = cleanHTML(match[2].trim());
      keyValuePairs.push({ key, value });
    }

    return keyValuePairs;
  };

  // Functia de curățare a HTML-ului (pentru a extrage doar textul)
  const cleanHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };

  // Funcția de resetare
  const handleReset = () => {
    setHtmlText(""); // Resetăm textarea-ul
    onExtract([]); // Resetează perechile extrase
  };

  return (
    <div className="space-y-4">
      <textarea
        value={htmlText}
        onChange={(e) => setHtmlText(e.target.value)}
        placeholder="Introduceti HTML-ul aici"
        rows="10"
        className="w-full p-4 border border-gray-300 bg-gray-200 text-gray-800 rounded-md"
      />
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="w-1/4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Extract
        </button>
        <button
          onClick={handleReset}
          className="w-1/4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default KeyValueExtractor;
