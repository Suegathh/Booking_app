const { Router } = require("express");
const { getRooms, createRoom, updateRoom, deleteRoom, getRoom } = require("../controller/roomController");
const { auth } = require("../middleware/authMidlleware");

const router = Router();

//get all rooms
router.get("/", getRooms)

//create rooms
router.post("/", auth, createRoom)

//single room
router.get("/:id", getRoom)

//update room
router.put("/:id", auth, updateRoom)

//delete room
router.delete("/:id", auth, deleteRoom)
module.exports = router;