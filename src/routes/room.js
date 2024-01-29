var router = require("express").Router();
const db = require("../../server/db/conn");

router.post("/create", (req, res, next) => {
    const { code, options } = req.body;
    db.instance()
      .collection("rooms")
      .insertOne({ code, options })
      .then((result) => {
        res.json(result.ops[0]);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  module.exports = router;