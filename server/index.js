const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser') 

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) =>{
  res.send("Backend Server Runnnig")
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jyotisman.sahoo1229@gmail.com',
    pass: 'ogzo dang adra pqbx'
  }
})


app.post('/subscribe', async (req, res) => {
  const {email} = req.body

  try {
    await transporter.sendMail({
      from: '"House of Marktech" <jyotisman.sahoo1229@gmail.com>',
      to: email,
      subject: "Subscription Confirmation ",
      text: "Welcome to HOM, Thank you for subscribing, We're honoured to have you on board.",
      html: "<b>Welcome to HOM, Thank you for subscribing, We're honoured to have you on board.</b>"
    })
    res.status(200).json({ message: 'Subscription Successful'})
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error processing subscription' });
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))