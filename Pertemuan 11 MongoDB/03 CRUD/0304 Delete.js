const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully connected to MongoDB using Mongoose!");
})

const Member = require("../models/Member");

Member.deleteMany({ name: "Space The Final Frontier" }, (err, raw) => {
    Member.findOne({ name: "Space The Final Frontier" }).exec((error, data) => {
        if (data) console.log("Find One: " + JSON.stringify(data));
    });
});