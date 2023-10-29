//********************* REQUIRE'S *****************************//
const { Router }  = require("express");
const router = Router();

//********************* CONTROLLER REQUIRE'S *****************************//
const mainController = require("../controllers/main-controller");

//********************* ROUTES OF INDEX *****************************//
router.get("/",mainController.index);

module.exports = router;