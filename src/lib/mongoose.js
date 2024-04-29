import mongoose from "mongoose";




export async function initiMongoose(){
  if(mongoose.connection.readyState===1){
    console.log("asPromise is already");
    return mongoose.connection.asPromise()
  }
  return await mongoose.connection(process.env.MONGODB_URL);
}

