const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

//run mongod :/Users/parag/mongodb/bin/mongod --dbpath /Users/parag/mongodb-data