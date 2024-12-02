import React, { useState } from "react";
import KeyValueExtractor from "./KeyValueExtractor";
import BicicletaElectricaTemplate from "./BicicletaElectricaTemplate"; // Template pentru bicicletă electrică
import BicicletaTemplate from "./BicicletaTemplate"; // Template pentru bicicletă normală
import LootieComponent from "./Animation";
import BotButton from "./BotButton";
const Homepage = () => {
  const [extractedPairs, setExtractedPairs] = useState([]); // Stocăm perechile cheie-valoare extrase
  const [templateType, setTemplateType] = useState("bicicleta"); // Setăm tipul de template (bicicleta sau bicicleta electrica)

  // Functia care primește datele extrase din KeyValueExtractor
  const handleExtractedData = (pairs) => {
    setExtractedPairs(pairs); // Setează perechile de date
  };

  // Functia care se ocupă cu schimbarea tipului de template
  const handleTemplateChange = (event) => {
    setTemplateType(event.target.value); // Actualizează tipul de template ales (bicicleta normală sau electrică)
  };

  return (
    <>
      <div className="bg-gray-300 w-full h-screen mx-auto p-14">
        <div className="flex gap-8 justify-center">
          {/* KeyValueExtractor */}
          <div className="w-full md:w-[45%] bg-gray-100 p-4 rounded-lg shadow-lg resize overflow-hidden">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Extract
              </h3>
            </div>
            <KeyValueExtractor onExtract={handleExtractedData} />
          </div>

          {/* Template Selector - Dropdown */}
          <div className="w-full md:w-[45%] bg-gray-100 p-4 rounded-lg  relative shadow-lg resize overflow-hidden">
            <div className="flex gap-10 justify-between mr-12 mb-4">
              <select
                value={templateType}
                onChange={handleTemplateChange}
                className="p-2 rounded bg-gray-300 text-gray-700"
              >
                <option value="bicicleta">Bicicleta Normală</option>
                <option value="bicicleta electrica">Bicicleta Electrică</option>
              </select>
              <div className="absolute right-[2%] transition-all duration-100 hover:scale-110 hover:cursor-pointer">
                <img src="./robot.png" className="w-10  h-10" alt="" />
              </div>
              <div className="flex  ">
                <div className="flex gap-2 text-gray-700 ">
                  <input
                    type="text"
                    placeholder="SKU"
                    className="w-24 bg-gray-300 rounded-md pl-1"
                  />
                  <input
                    type="text"
                    placeholder="title"
                    className="w-32 bg-gray-300 rounded-md pl-1"
                  />
                </div>
              </div>
            </div>

            {/* Render the selected template based on the type */}
            {extractedPairs.length > 0 ? (
              templateType === "bicicleta" ? (
                <BicicletaTemplate pairs={extractedPairs} />
              ) : (
                <BicicletaElectricaTemplate pairs={extractedPairs} />
              )
            ) : (
              <div className="text-gray-500 flex justify-center  items-center ">
                {/* Înlocuim imaginea cu animația Lottie */}
                <LootieComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
