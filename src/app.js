const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

const studentsRoutes = require("./routes/student.routes")

app.use("/student", studentsRoutes)

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found !" })
})

module.exports = app
