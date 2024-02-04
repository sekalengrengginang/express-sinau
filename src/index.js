const express = require('express');
const cors = require('cors')
const articleRouter = require('./router/article');
const authRoutes = require('./router/auth');
const app = express()
const port = 3000 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

// routing
app.use(articleRouter);
app.use(authRoutes);

// root route
app.get('/', (req, res) => {
    res.send('index!')
})
// about route
app.get('/about', (req, res) => {
    res.send('about!')
})
app.listen(port, () => {
    console.log(`server ini berjalan pada port ${port}`)
})
