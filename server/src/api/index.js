const express = require("express");

const db = require("../server.js")

const router = express.Router();

router.get("/get-products", (req, res) => {
    const SQL = `SELECT * from products ORDER BY RAND() LIMIT 10`;

    db.query(SQL, (error, result) => {
        if(error) {
            console.log(error);
        }
        else {
            res.send(result);
        }
    })
});

module.exports = router;