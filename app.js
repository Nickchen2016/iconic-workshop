const express =require('express'),
      handlebars = require('express-handlebars'),
      bodyParser = require('body-parser'),
      path = require('path'),
      nodemailer = require('nodemailer');

const app = express();

//view engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.render('client')
    // res.sendFile(path.join(__dirname, './views/client.html'));
})

app.listen('8888', ()=>{
    console.log('server started...')
})