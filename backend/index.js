require("dotenv").config()
require('./config/database').connect()
const express = require('express')
const auth = require('./middleware/auth')
const User = require('./model/user')
const Employee = require('./model/employee')
// const cors = require('cors')

const port = process.env.PORT || 4000 
const app = express()
app.use(express.json())
// app.use(cors)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employee', auth, async (req, res) => {
  try {
    const userWalletAddress = req.user
    const user = await User.findOne({walletAddress: userWalletAddress})
    const employees = user.employees
    res.status(200).json(employees)
  } catch (error) {
    console.error({error})
    res.status(500).json({message: 'Error fetching employees'})
  }
});

app.post('/employee', auth, async (req, res) => {
  const employeeData = req.body
  const userWalletAddress = req.user

  try {
    let user = await User.findOne({walletAddress: userWalletAddress})
    if(!user) {
      user = await User.create({walletAddress: userWalletAddress, employees: []})
    }
    const {firstName, lastName, walletAddress, wages} = employeeData
    const newEmployee = await Employee.create(employeeData)
    user.employees.push(newEmployee)
    await user.save()
  
    if(!firstName || !lastName || !walletAddress || !wages) {
      return res.status(401).json({message: "Invalid employee data"})
    }

    res.status(200).json({ message: 'Employee data saved' })
  } catch (error) {
    console.error({error})
    res.status(500).json({message: 'Error creating employee'})
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})