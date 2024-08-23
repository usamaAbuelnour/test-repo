const express = require('express');

const app = express();

app.get('/', (_, res)=> res.send('hello people!!!'))

app.listen(3100, ()=>console.log('server up and running on port 3100'))

module.exports = app;