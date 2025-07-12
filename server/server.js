const connectToMongo = require("./db");
const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config();

connectToMongo();
const app = express();
const port = 7000;

app.use(cors());

app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Available routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    console.log(`rewear backend listening on port ${port}`);
});