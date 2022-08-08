const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

const router = require("./router")

app.use("/api", router)

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found !" })
})

module.exports = app
