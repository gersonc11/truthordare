const router = require("express").Router();
const dareRoutes = require("./dares");

// Book routes
router.use("/dares", dareRoutes);

module.exports = router;
