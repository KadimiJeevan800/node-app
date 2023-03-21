// var data=require("./first");

var express=require('express');

var app=express();
var mysql = require('mysql');
var cors = require('cors')

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
app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000","https://localhost:3005"]
}))

// Get Requests 
app.get('/',(req,res)=>
{
    res.send("<div style='background-color:antiquwhite' class='home'><h1>Hello world..! </h1> <p>HomePage</p></div>");
  
});
// Get Request with ID as Parameter
app.get('/user/:id',(req,res)=>
{
    // res.send("Hello world..!");
    var sql=`SELECT * from users where ID=${req.params.id}`;
   
    con.query(sql,(err,result,fields)=>
    {
        res.send(result);
    })

});

// Get Request to get all the users in table
app.get('/users',(req,res)=>
{
   
    var sql=`SELECT * from users order by ID ASC `;
    con.query(sql,(err,result,fields)=>
    {
        if(err) throw err;
        res.send(result);
       
    })
});

// Get request for Sorting the Table Data
app.get('/sort',(req,res)=>
{
   
    var sql=`SELECT * from users order by name DESC `;
    con.query(sql,(err,result,fields)=>
    {
        if(err) throw err;
        res.send(result);
        // console.log(result);
    })
});

// Get Request to Get user using username as a parameter
app.get('/userdata/:username',(req,res)=>
{
    // res.send(req.params.username);
    var sql=`SELECT * from users where name='${req.params.username}'`;
   
    con.query(sql,(err,result,fields)=>
    {
        res.send(result);
    })


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

app.put('/edit/user/:id',(req,res)=>
{
    // res.send("Updating data.."+req.params.id);
    const {name,team}=req.body.user;
    console.log(req.body.user)
    var sql=`UPDATE users
    SET name ='${name}' , address='${team}'
    WHERE ID = ${req.params.id};`;
    con.query(sql,(err,result)=>
    {
        if(err)
        {
            res.send("Un-Successfully");
        }
        else{
            res.send(result);
        }
        
    })
});

//Posting Data
// var poid=20;
app.post('/add/user',(req,res)=>
{
//    console.log(req);
   const data=req.body.user;
   console.log(data)
    // var sql='INSERT INTO users SET ?'+data;
    con.query('INSERT INTO users SET ?',data,(err,result)=>
    {
        if(err)
        {
            res.send("Error Occurred");
        }
        else{
            res.send(result);
        }
        
    })
    

});


app.listen(3001,()=>
{
    console.log("Listening at port number: 3001");
})


// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('1','Jeevan','RCB');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('2','AJay','SRH');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('3','Prem','CSK');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('4','Dev','CSK');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('5','Nikhil','RCB');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('6','Sai','SRH');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('7','Ram','DD');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('8','Bheem','KXIP');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('9','Chinna','CSK');
// INSERT INTO `users`(`ID`, `name`, `address`) VALUES ('10','Vishal','PSG');