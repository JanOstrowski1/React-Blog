const express=require("express");
const app= express();

console.log("HEaaa");

app.use("/",(req,res)=>{
    console.log("hello there");
})


app.listen("5000", ()=>{
    console.log("Backend is running.");
    }
)