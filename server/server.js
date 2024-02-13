const express = require("express");
const cors = require("cors");
const mysql = require ("mysql2");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', 
    database: 'e_commerce',
});

db.connect(function(error) {
    if(error) {
        console.log("Erro ao conectar com a base de dados e_commerce");
    }
    else {
        console.log("Base de dados conectada com sucesso");
    }
});

module.exports = db;

const showcaseRoute = require("./showcase");
app.use(showcaseRoute)

app.listen(8080, function() {
    console.log("Servidor iniciado na porta 8080");
});