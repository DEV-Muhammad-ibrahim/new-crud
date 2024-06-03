import mongoose from "mongoose";

const connection = async () => 
  {
    try {
      const connection = await mongoose.connect("mongodb+srv://new:test1234@cluster0.prgq18t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      if(connection){
        console.log("Connected To Database")
      }else{
        console.log("Something went wrong")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

export default connection