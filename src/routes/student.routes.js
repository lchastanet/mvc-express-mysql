const express = require("express")

const studentsController = require("../controllers/student.controller")

const router = express.Router()

router.get("/", studentsController.getAll)
router.get("/:id", studentsController.getOne)
router.post("/", studentsController.createOne)
router.put("/:id", studentsController.updateOne)
router.delete("/:id", studentsController.deleteOne)

module.exports = router
