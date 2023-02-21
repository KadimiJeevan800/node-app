// var data=require("./first");

var express=require('express');

var app=express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"node"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

app.get('/',(req,res)=>
{
    res.send("<h1>Hello world..! </h1> <p>HomePage</p>");
  
});


app.get('/home/:id',(req,res)=>
{
    // res.send("Hello world..!");
    var sql=`SELECT * from users where ID=${req.params.id}`;
    if(req.params.id>=6 || req.params.id<=0)
    {
        return res.send("Invalid UserID");
    }
    con.query(sql,(err,result,fields)=>
    {
        res.send(result)
    })
});

app.get('/names',(req,res)=>
{
    // res.send("Hello world..!");
    // res.send(req.params.name);
    var sql=`SELECT * from users  ORDER BY name  `;
    con.query(sql,(err,result,fields)=>
    {
        if(err) throw err;
        res.send(result);
        // console.log(result);
    })
});

app.post('/add',(req,res)=>
{
    
    res.send(req.body.name);
});


// Deleting Data from table 
app.delete('/rm/:id',(req,res)=>
{
    // res.send(req.params.id); 
    var sql=`DELETE FROM users where ID=${req.params.id}`;
    con.query(sql,(err,result)=>
    {
        if(err)throw err;
        res.send("Deleted Successfully");
    });
});

// Updating Data in users table

app.put('/up',(req,res)=>
{
    res.send("Updating data..");
});

app.listen(3001,()=>
{
    console.log("Listening at port number: 3001");
})