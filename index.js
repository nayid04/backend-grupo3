// Cargamos el módulo HTTP
const express = require("express");

const app = express();

app.get("/",(req,res) => {
  res.send("Hola desde home");
});

app.get("/usuarios", (req,res) => {
  let resp = {
    name: "Nayid",
    age: "19",
    url: req.url,
  };
  res.send(resp);
});

app.listen(5000, () => {
  console.log("Servidor en la url http://127.0.0.1:3000/");
});

