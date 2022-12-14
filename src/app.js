const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

app.get("*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
