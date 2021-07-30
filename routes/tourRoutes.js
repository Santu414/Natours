const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

//router.param("id", checkID);

router.get("/", getAllTours);
router.get("/:id", getTour);
router.post("/", createTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
