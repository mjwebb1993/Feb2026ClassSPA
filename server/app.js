// "Import" the Express module instead of http
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import practice from "./practice.js";
import pizzas from "./controllers/pizzas.js";

// Matt has to do this because his DNS is currently broken
import dns from "dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const PORT = process.env.PORT || 3000;

// Initialize the Express application
const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`);
  next();
};

app.use(cors());
app.use(express.json());
app.use(logging);

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// Handle the request with HTTP GET method from http://localhost:3000/
app.get("/", (request, response) => {
   response.send("Welcome to the Class SPA REST API");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.json({ message: "Service healthy" });
});

// http://localhost:3000/echo/matt
// http://localhost:3000/echo/fred?flip=1&lastName=Thomas
app.get("/echo/:text", (request, response) => {
  let output = request.params.text
  if ('flip' in request.query && request.query.flip === '1') {
    output = output.split("").reverse().join("");
  }
  if ('lastName' in request.query) {
    output += ` ${request.query.lastName}`
  }
  response.status(418).send(`You told me to echo ${output}`)
})

app.use("/practice", practice);
app.use("/pizzas", pizzas);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
const server = app.listen(PORT, () => console.log(`Listening on port ${server.address().port}`));
