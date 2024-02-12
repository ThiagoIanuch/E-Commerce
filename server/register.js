
const express = require("express");
const db = require("./server"); 

const router = express.Router();

router.post("/register", function(req, res) {
    const { username } = req.body;

    const query = `INSERT INTO users (username) VALUES (?)`;

    db.query(query, [username], function(error) {
        if(error) {
            console.log("Ocorreu um erro ao enviar os dados");
        }
        else {
            console.log("Dados enviados com sucesso")
        }
    });
});

module.exports = router;