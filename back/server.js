const express = require("express");
const app = express();

const mysql = require ("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e_commerce'
})

db.connect(function(error) {
    if(error) {
        console.log("Erro ao conectar com a base de dados e_commerce");
    }
    else {
        console.log("Base de dados conectada com sucesso");
    }
});

app.get("/", function(req, res) {
    res.send("Servidor iniciado com sucesso");
});

app.listen(8080, function() {
    console.log("Servidor iniciado na porta 8080");
});