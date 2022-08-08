const router = require("express").Router()

const studentRoutes = require("./student.routes")

router.use("/student", studentRoutes)

module.exports = router
