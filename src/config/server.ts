import express from 'express';
import { parse } from './versions/v1';
import { parseV2 } from './versions/v2';
const app = express()
const port : string|number= process.env.PORT || 3000;
app.use(express.json());

app.post('/api/v1/parse', function (req, res) {
   res.send(parse(req.body));
})

app.post('/api/v2/parse', function (req, res) {
   res.send(parseV2(req.body));
})

app.use("*",(req, res) =>{res.send("<h1>Welcome to your server!</h1>")})


app.listen(port,() => console.log(`hosting @${port}`));