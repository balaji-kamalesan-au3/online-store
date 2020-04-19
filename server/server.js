const app = require("express")();
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./config/keys").mongoURI
const userRoute = require("./routes/api/users");

app.use(bodyParser.json());
app.use("/user",userRoute);

mongoose.connect(
    db, 
    { useNewUrlParser: true,useUnifiedTopology: true }
    )
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("error"));




app.listen(5000, () => console.log("Listening on port 5000"))