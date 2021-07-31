const express = require("express");
const router = express.Router();

const {
  getAllTours,
  aliasTopTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/tourControllers");

//router.param("id", checkID);

router.get("/top-5-cheap", aliasTopTours, getAllTours);
router.get("/tour-stats", getTourStats);
router.get("/monthly-plan/:year", getMonthlyPlan);
router.get("/", getAllTours);
router.get("/:id", getTour);
router.post("/", createTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
