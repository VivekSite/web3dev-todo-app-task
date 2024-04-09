import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const URI: string = process.env.MONGODB_URI || "mongodb://localhost:27017/web3dev-todo-app";
        const connection: typeof mongoose = await mongoose.connect(URI);

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
}

export default ConnectDB;