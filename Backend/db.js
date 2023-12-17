const mongoose=require('mongoose');
const mongoURI="mongodb+srv://deepdyadav:anushka06@cluster0.8znd3pm.mongodb.net/inotebook?"

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    console.log("connected to mongoose")
}

module.exports=connectToMongo;