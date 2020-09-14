import express from 'express';
const app = express()
const createError = require('http-errors');
const port : string|number= process.env.PORT || 3000;
app.use(express.json());

app.use('/api', require('./api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
   next(createError(404));
 });

app.use("*",(req, res) =>{res.send("<h1>Welcome to your server!</h1>")})


app.listen(port,() => console.log(`hosting @${port}`));