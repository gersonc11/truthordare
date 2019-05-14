const router = require("express").Router();
const daresController = require("../../controllers/daresController");

// Matches with "/api/books"
router.route("/")
  .get(daresController.findOne)
  .post(daresController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(daresController.findById)
  .delete(daresController.remove);

module.exports = router;
