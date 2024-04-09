import express from "express";
import dotenv from 'dotenv'
import ConnectDB from "./db";
import router from "./routes";
import cors from "cors"

// configure dotenv
dotenv.config();

// create an instance of express
const app: express.Application = express();

// Use json middleware
app.use(express.json());

// Configure CORS
app.use(cors());
// Register routes
app.use("/", router);


// Connect to Database
ConnectDB()

// Listen for requests
const port: number = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});