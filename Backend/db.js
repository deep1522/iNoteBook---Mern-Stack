const mongoose = require('mongoose');



const mongoURI = 'mongodb+srv://deepdyadav:anushka06@cluster0.8znd3pm.mongodb.net/inotebook1?'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo