import mongoose from "mongoose";

async function connectMongo() {
    try {
        // await mongoose.connect(process.env.MONGO_URI) 
    }
    catch (error) {
        console.log("CANNOT CONNECT TO MONGO\n", error)
    }
}