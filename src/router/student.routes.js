const router = require("express").Router()

const studentsController = require("../controllers/student.controller")

router.get("/", studentsController.getAll)
router.get("/:id", studentsController.getOne)
router.post("/", studentsController.createOne)
router.put("/:id", studentsController.updateOne)
router.delete("/:id", studentsController.deleteOne)

module.exports = router
