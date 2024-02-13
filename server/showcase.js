const express = require("express");
const router = express.Router();

const db = require("./server.js")

router.get("/get-showcase", (req, res) => {
    const SQL = `SELECT * from products ORDER BY RAND() LIMIT 10`;

    db.query(SQL, (error, result) => {
        if(error) {
            console.log(error);
        }
        else {
            console.log(result.productPrice)

            res.send(result);
        }
    })
});

module.exports = router;