// imports
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes.js'

// variable
const app = express()
const PORT = 8080

// connexion mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb',{useNewUrlParser:true})

// endpoints
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
routes(app)

app.use(express.static('public'))

app.get('/',(req,res)=>
    res.send(`server launched successfully`)
)

// others
app.listen(PORT, ()=>
    console.log(`launch server at http://127.0.0.1:${PORT}`)
)