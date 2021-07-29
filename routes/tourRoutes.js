const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require("../controllers/tourControllers");

router.param("id", checkID);

router.get("/", getAllTours);
router.get("/:id", getTour);
router.post("/", checkBody, createTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
