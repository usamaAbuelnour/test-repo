const express = require('express');

const app = express();

app.get('/', (_, res)=> res.send('hello people!!!'))

app.listen(3000, ()=>console.log('server up and running on port 3000'))