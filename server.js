const express = require('express');

const app = express();

app.get('/', (_, res)=> res.send('hello people!!!'))

app.listen(2000, ()=>console.log('server up and running on port 2000'))