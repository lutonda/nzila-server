var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const uuidv5 = require("uuid/v5");

const AssociationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    people: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'People'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }

})


var AssociationTask = (module.exports = mongoose.model("Association", AssociationSchema));