const express = require('express') 
const app = express()   
const bodyParser = require("body-parser");
const usersRoutes = require('./routes/usersRoute')
const port = 8080
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors');

app.use(cors());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGO_CONNECTION, {
    // Attribut de l'objet connect
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion a mongoDB réussie'))
  .catch(err => console.log('Connection échouée ' + err))

app.use('/', usersRoutes);

app.listen(port, () => {
    console.log(`Express running on port ${port}`)
})