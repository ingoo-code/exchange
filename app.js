const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const routes = require('./routes')
const db = require('./models')

const PORT = process.env.PROT || 3500

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

db.sequelize.sync({force:true})
.then(_=>{
    console.log(`DB connection success`)
})
.catch(err=>{
    console.log(`DB disconnection ${err}`)
}) 


app.set('view engine','html')
nunjucks.configure('views',{ express: app })

app.use('/',routes)

app.listen(PORT,()=>{
    console.log(`Listen server port ${PORT}`)
})