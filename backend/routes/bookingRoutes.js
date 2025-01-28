const { Router } = require("express");
const { getBookings, createBooking, getBooking, updateBooking, deleteBooking } = require("../controller/bookingController");


const router = Router();

router.get("/", getBookings);
router.post("/", createBooking);
router.get("/:id", getBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
