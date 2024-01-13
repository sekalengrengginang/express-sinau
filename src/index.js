const express = require('express');
const userRouter = require('./router/users');
const app = express()
const port = 3000 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/database-keren/root/example', {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err.reason));
  
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(userRouter)

var reqTime = (req,res,next)=>{
    req.reqTime = new Date()
    next() 
}

app.use(reqTime)
app.set('view engine','ejs')
app.use('/assets',express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<img src="https://media1.tenor.com/m/fSwZVENOqB4AAAAC/arisu-tachibana-idolmaster-cinderella-girls-u149.gif"/>')
    const tanggal = {
        date: req.reqTime.toString()
    }
    res.render('pages/index.ejs',{tanggal: tanggal})
})


app.get('/about', (req, res) => {
    res.render('pages/about.ejs')
})

app.listen(port, () => {
    console.log(`Aplikasi ini berjalan pada port ${port}`)
})
