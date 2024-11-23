const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(verificarLicensa);

function verificarLicensa(req, res, next) {
  const apiKey = req.query.api_key;
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({
      mensagem:
        "Acesso negado sai dai bixo gaiato, deixa de ser liso e compra a licença",
    });
  }
}

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log("DEU BOM");
});
