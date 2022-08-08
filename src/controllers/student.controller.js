const studentDataAccess = require("../models/student.model")
const studentValidator = require("../validators/student.validator")

exports.getAll = async (req, res) => {
  try {
    const students = await studentDataAccess.findAll()

    return res.json(students)
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong !" })
  }
}

exports.getOne = async (req, res) => {
  const studentId = req.params.id

  try {
    const [student] = await studentDataAccess.findOne(studentId)

    if (!student) return res.status(404).json({ message: "No student found !" })

    return res.json(student)
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong !" })
  }
}

exports.createOne = async (req, res) => {
  const student = req.body

  const validationErrors = studentValidator.validate(student, true)

  if (validationErrors) return res.status(400).json(validationErrors)

  try {
    const data = await studentDataAccess.addOne(student)

    return res.status(201).json(data)
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong !" })
  }
}

exports.updateOne = async (req, res) => {
  const studentId = req.params.id
  const student = req.body

  const validationErrors = studentValidator.validate(student)

  if (validationErrors) return res.status(400).json(validationErrors)

  try {
    const data = await studentDataAccess.replaceOne(studentId, student)

    return res.status(200).json(data)
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong !" })
  }
}

exports.deleteOne = async (req, res) => {
  try {
    const studentId = req.params.id

    const result = await studentDataAccess.removeOne(studentId)

    if (result) return res.jsonStatus(204)

    return res.status(404).json({ message: "No student found !" })
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong !" })
  }
}
