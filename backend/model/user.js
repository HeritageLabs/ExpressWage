const mongoose = require('mongoose')

const Employee = require('./employee')

const userSchema = new mongoose.Schema({
    walletAddress: {type: String, unique: true, required: true},
    employees: {type: [Employee.schema], default: []}
})

module.exports = mongoose.model('User', userSchema)