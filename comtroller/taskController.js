const { getDb } = require("../dbConfig/dbConnect");

const getTask = async (req, res) => {
    const db = getDb();
    const result = await db.collection("task").find().toArray();
    res.send(result);
}
module.exports = {
    getTask,
}


