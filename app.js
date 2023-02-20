// var http = require('http');


// async function data(res)
// {
//   const resp= await fetch("https://fakestoreapi.com/products");
//   // setProd(await resp.json())
//   console.log( await resp.json());
//   console.log("Hello");
//   res.write(await resp.json());
//   // let d=await resp.json();
//   // return d
// }
// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client


//     // res.write(data());
//   data(res);

  
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


// const data=require('./logger');

// data.log("This is my first node app");
// console.log(data.name); 


// prod=data.prod()
// // console.log((prod));
// console.log(__dirname)
// console.log(__filename)
// console.log(data.myDateTime());


//Express JS 
const express=require('express');
const app=express();

app.use(express.json())
const port=process.env.port || 3001;
var users=[
    {id: 1,name :"A"},
    {id :2, name :"B"},
    {id :3, name:"C"},
    {id :4, name:"D"},
    {id :5, name:"E"},
    {id :6, name:"F"},
]

app.get('/',(req,res)=>
{
    res.send("Home Page...");
});

app.get('/api/user',(req,res)=>
{
    res.send(users);
})

app.get('/api/user/:id',(req,res)=>
{
    const user= users.find(u => u.id ===  parseInt(req.params.id))
    if(!user)
    {
        return res.status(400).send("User Not Available with this ID");
    }
    res.send(user);
})

app.get('/api/:year/:month',(req,res)=>
{
    // res.send(req.params);
    if(req.params.month > 12 )
    {
        return res.status(404).send("Month outbound....");
    }
    if( req.params.month <= 0)
    {
        return res.status(404).send("Month is less than one...");
    
    }
    res.send(req.params);
})


//Posting Data
app.post('/api/user',(req,res)=>
{
    if(!req.body.name || req.body.name.length<3)
    {
        return res.status(400).send("Input is too weak....");
    }
    const user={
        id: users.length+1,
        name: req.body.name
    }
    users.push(user)
    res.send(user);

});


app.delete('/api/user/:id',(req,res)=>
{
    const user= users.find(u => u.id ===  parseInt(req.params.id))
    if(!user)
    {
        return res.status(400).send("User Not Available with this ID");
    }

    const index=users.indexOf(user);
    users.splice(index,1);
    res.send(user);
})


app.put('/api/user/:id/:name',(req,res)=>
{
    const id=req.params.id;
    const name=req.params.name;
    res.send(id+name);
})



app.listen(port,()=>
{
    console.log(`Listening to Port ${port}`);
})
