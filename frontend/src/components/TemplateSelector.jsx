import React, { useState } from "react";
import BicicletaElectricaTemplate from "./BicicletaElectricaTemplate"; // Importa template-ul pentru bicicleta electrică
import BicicletaTemplate from "./BicicletaTemplate"; // Importa template-ul pentru bicicleta normală

const TemplateSelector = ({ pairs }) => {
  // State-ul pentru a urmări selecția template-ului
  const [selectedTemplate, setSelectedTemplate] = useState("electric");

  // Funcția care schimbă template-ul în funcție de selecția din dropdown
  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  return (
    <div className="template-selector">
      {/* Dropdown pentru alegerea tipului de template */}
      <div className="mb-4">
        <label htmlFor="templateSelect" className="text-xl font-semibold">
          Alege tipul de bicicletă:
        </label>
        <select
          id="templateSelect"
          className="ml-4 p-2 border border-gray-300 rounded-md"
          value={selectedTemplate}
          onChange={handleTemplateChange}
        >
          <option value="electric">Bicicleta electrică</option>
          <option value="normal">Bicicleta normală</option>
        </select>
      </div>

      {/* Afișarea template-ului corespunzător */}
      {selectedTemplate === "electric" ? (
        <BicicletaElectricaTemplate pairs={pairs} />
      ) : (
        <BicicletaTemplate pairs={pairs} />
      )}
    </div>
  );
};

export default TemplateSelector;
