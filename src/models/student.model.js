const db = require("./db")

const findAll = async () => {
  try {
    const [result] = await db.query("SELECT * FROM `student`")
    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}

const findOne = async (studentId) => {
  try {
    const [result] = await db.query("SELECT * FROM `student` WHERE ID = ?", [
      studentId,
    ])

    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}

const addOne = async (student) => {
  try {
    const { firstname, lastname, age, remote } = student
    const [result] = await db.query(
      "INSERT INTO `student` (firstname, lastname, age, remote) VALUES (?, ?, ?, ?)",
      [firstname, lastname, age, remote]
    )

    return { id: result.insertId, ...student }
  } catch (e) {
    console.log(e)
    throw e
  }
}

const replaceOne = async (studentId, student) => {
  try {
    const [result] = await db.query("UPDATE `student` SET ? WHERE ID = ?", [
      student,
      studentId,
    ])

    if (result.affectedRows) {
      const [result] = await db.query("select * from `student` WHERE ID = ?", [
        studentId,
      ])
      const [student] = result

      return student
    }

    return result.affectedRows
  } catch (e) {
    console.log(e)
    throw e
  }
}

const removeOne = async (studentId) => {
  try {
    const [result] = await db.query("DELETE FROM `student` WHERE ID = ?", [
      studentId,
    ])

    return result.affectedRows
  } catch (e) {
    console.log(e)
    throw e
  }
}

module.exports = { findAll, findOne, addOne, replaceOne, removeOne }
