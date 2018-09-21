const express =require('express'),
      handlebars = require('express-handlebars'),
      bodyParser = require('body-parser'),
      path = require('path'),
      nodemailer = require('nodemailer');
require('./secret')

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
})

app.post('/send', (req,res)=>{
    console.log('*******', req.body)
        const output = `
                        <p>Your have a new message</p>
                        <h3>Details</3>
                        <p>Email: ${req.body.email}</p>
                        <p>Message: ${req.body.message}</p>
                        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'fullstack.nick@gmail.com', // generated ethereal user
                pass: process.env.pass // generated ethereal password
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"iconic workshop contact" <${req.body.email}>`, // sender address
            to: 'fullstack.nick@gmail.com', // list of receivers
            subject: 'New Message', // Subject line
            text: 'New Message', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);

            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.render('client', {msg:'Your E-mail has been send 🙂'})
        });
})

app.listen('8888', ()=>{
    console.log('server started...')
})