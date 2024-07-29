import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nagendraDBUser:rudra5511@clusterone.j3id65i.mongodb.net/?retryWrites=true&w=majority&appName=clusterone')
        console.log(`connected to database ${conn.connection.host}`)
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDb;