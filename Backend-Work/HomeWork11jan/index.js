const { json } = require('express');
const express=require('express');
const app= express();


app.use(json())


app.use('/user',require('./Api/user'));
app.use('/register',require('./middleware/middleWare'),require('./Api/register'));

app.listen(3000)

