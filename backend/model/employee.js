const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  walletAddress: String,
//   email: String,
//   position: String,
  wage: Number,
  deductions: { type: Number, default: 0 },
  interval: { type: Number, default: null },
  lastPaid: { type: String, default: null },
});

module.exports = mongoose.model('Employee', employeeSchema);