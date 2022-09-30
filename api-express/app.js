const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
    console.log("Connected to Mongo DB..");
    app.listen(process.env.PORT);
    console.log("Server is listening at ", process.env.PORT);
}).catch((err) => {
    console.log("Error Caught : ", err.message);
});

const quality = require('./controller/quality');
app.use('/quality', quality);
