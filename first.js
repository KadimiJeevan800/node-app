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
    
    //creating Database
    //var sql="CREATE DATABASE node"; 
    
    //Creating a new table;
    //   var sql = "CREATE TABLE users (ID int NOT NULL AUTO_INCREMENT,name VARCHAR(255), address VARCHAR(255),PRIMARY KEY (ID));";
    
    //Inserting into table;
    // var data=[["Jeevan","HYD"],["Ajay","MI"],["",""]]
    // var sql="INSERT INTO users (name, address) VALUES ('Jeevan', 'RCB')"

    //Select Data from Database
    var sql=`SELECT * from users where address="Hyd"`;;
  con.query(sql, function (err, result,fields) {
    if (err) throw err;
    console.log("Data Retrieved successfully");
    // console.log(result);
    var dat=result;
    console.log(dat);
    return result
  });
});
// module.exports.data=dat;