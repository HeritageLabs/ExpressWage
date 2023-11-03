const mongoose = require('mongoose')

const Employee = require('./employee')

const userSchema = new mongoose.Schema({
    walletAddress: {type: String, unique: true},
    employees: [Employee.schema]
})

module.exports = mongoose.model('User', userSchema)