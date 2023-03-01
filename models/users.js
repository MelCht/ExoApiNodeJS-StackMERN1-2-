const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    salary: { type: Number, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("Users", usersSchema);