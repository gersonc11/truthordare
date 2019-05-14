const router = require("express").Router();
const daresController = require("../../controllers/daresController");

// Matches with "/api/dares"
router.route("/")
  .get(daresController.findAll)
  .post(daresController.create);

// Matches with "/api/dares/:id"
router
  .route("/:id")
  .get(daresController.findById)
  .put(daresController.update)
  .delete(daresController.remove);

module.exports = router;
