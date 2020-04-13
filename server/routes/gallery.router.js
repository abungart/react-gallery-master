const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const galleryItems = require("../modules/gallery.data");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params.id);

  const galleryId = req.params.id;

  const queryText = `UPDATE gallery
  SET "likes" = "likes" + 1
  WHERE "id" = $1;`;

  pool
    .query(queryText, [galleryId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error updating gallery:", err);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY "id" ASC;`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
