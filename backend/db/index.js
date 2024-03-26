const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Job_Portal')
.then(()=>{
    console.log('DB connected successfully');
})
.catch(err => console.log('Error connecting to DB', err))