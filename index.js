const express = require('express')
const app = express();
const morgan = require('morgan');



app.use(morgan('tiny')) //on every single request this is called. move on to the next thing


app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
})

app.use('/dogs', (req,res,next)=>{
    console.log("I LOVE DOGS")
    next();
})
/*
app.use((req,res,next)=>{
    console.log("this is the first middleware")
    next();
})

app.use((req,res,next)=>{
    console.log("this is my second middleware");
    next();
})
*/

app.get('/', (req,res)=>{
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})


app.get('/dogs', (req,res)=>{
    console.log(`Request Date: ${req.requestTime}`)
    res.send('WOOF WOOF')
})
app.use((req,res)=>{
    res.send('not found')
})
app.listen(3000, ()=>{
    console.log('App is running on localhost:3000');
})