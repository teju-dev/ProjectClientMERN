const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");

const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db.js");

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
});
