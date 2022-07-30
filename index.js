// const something = require('somelibary');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


//let object = new ClassName();
//object.method();

//Lets create a async function

//1. Function defination
async function anil(){
    //Every function return something
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@oklabsmongodbserver.dgmru.mongodb.net/?retryWrites=true&w=majority`);
}

//2. Function calling
let po = anil();
//po.then().catch() promise chain
po.then(d=>{
    console.log("Connected");

    // I can do the next task here

    // 1. You have to define Schema

    //Lets create the collection/Table
    //Collection Name  = Students
    //object.method();
    const Students = mongoose.model('Students',{name:String}); //Actual Args

    // Students is a class

    const student1 = new Students({name:"Pankaj"});

    let po = student1.save();

    const student2 = new Students({name:"Pushpendra"});

    let po2 = student2.save();

    const student3 = new Students({name:"Anjali"});

    let po3 = student3.save();

    // promise chain
    //po.then().carch()l;
    po2.then(() => console.log('Saved')).catch();
}).catch(e=>{
    console.log("Error")
});




let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`The server is running at ${port}`);
});