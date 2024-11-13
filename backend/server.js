const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors()); // Permite CORS pentru toate cererile (poți limita la un domeniu anume dacă vrei)
app.use(express.json()); // pentru a procesa JSON-ul

// Ruta de procesare
app.post("/extract", (req, res) => {
  const extractedData = req.body.extractedData; // Datele extrase trimise din frontend
  console.log("Datele primite de la frontend:", extractedData); // Log pentru datele primite

  // Logăm tabelul parsat (cheie: valoare)
  console.log("Tabelul parsat cu perechile cheie:valoare:");
  extractedData.forEach((pair) => {
    console.log(`${pair.key}: ${pair.value}`);
  });

  // În acest caz, returnăm doar un mesaj general
  res.json({ result: "Date procesate cu succes!" });
});

app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
