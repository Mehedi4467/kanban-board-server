const { getDb } = require("../dbConfig/dbConnect");
const ObjectId = require('mongodb').ObjectId;
const getTask = async (req, res) => {
    const db = getDb();
    const result = await db.collection("task").find().sort({ "_id": -1 }).toArray();
    res.send(result);
}

const postTask = async (req, res) => {
    const db = getDb();
    const task = req.body;
    const date = new Date(Date.now()).toLocaleString();
    const taskInfo = { ...task, 'created_on': date }
    const result = await db.collection("task").insertOne(taskInfo);
    res.send(result);
}
const taskStatus = async (req, res) => {
    const db = getDb();
    const id = req.params.id;
    const status = req.body.status;
    const filter = { _id: ObjectId(id) };
    const date = new Date(Date.now()).toLocaleString();
    const updateDoc = {
        $set: {
            status: status,
            created_on: date
        },

    };
    const result = await db.collection("task").updateOne(filter, updateDoc, { upsert: true });
    res.send(result);
}

module.exports = {
    getTask,
    postTask,
    taskStatus
}


