import mongoose, { ConnectOptions } from 'mongoose';


const databaseUrl =  process.env.MONGO_URL || 'mongodb://localhost:8080/transvisiondb';




const Connect = async () => {
  try {
    const conn = await mongoose.connect(databaseUrl) 
  
    console.log(`mongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export default Connect;