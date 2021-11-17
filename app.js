const mongoose = require('mongoose')


// Mongoose Configaration
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/storydb").then(()=>{
  console.log("Database conected.....")
}).catch((err) => {console.log("Something went wrong to connet to database: "+err)})

// Model Users

// Define Model
const UserSchema = mongoose.Schema({
  name:{
  type:String,
  require: true
  },
  age:{
  type:Number,
  require:true
  },
  email:{
  type:String,
  require:true
  },
  conuntry:String,
})

// The Collection
mongoose.model('users', UserSchema)

const userInfo = mongoose.model('users')

new userInfo({
  name: 'Steve Jobs',
  age: 75,
  email: 'steve25@gmail.com',
  conuntry: 'usa'

}).save().then(() => {
console.log('User created succeseful!')
}).catch((err) => {
console.log(`Something went wrong: ${err}`)
})