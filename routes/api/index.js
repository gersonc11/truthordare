const router = require("express").Router();
const dareRoutes = require("./dares");

// Dare routes
router.use("/dares", dareRoutes);

module.exports = router;
