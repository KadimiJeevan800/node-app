let name="jeevan";

function log(message)
{
    console.log("msg :",message);
}


function prod()
{

    let data=[]
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
        // data=body;
        // return data
    });
}
exports.myDateTime = function () {
    return Date();
  };

module.exports.log=log;
module.exports.name=name;
module.exports.prod=prod;


// import fetch from 'node-fetch';

// const response = await fetch('https://fakestoreapi.com/products');
// const data = await response.json();

// console.log(data);