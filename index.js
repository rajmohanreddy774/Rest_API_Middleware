const express = require("express");

const app=express();
app.use(allbooks);

app.get("/home",function(req,res){
    res.send("Hello")
});

const books = [
    {title: 'Game Of Thrones', id: 1},
    {title: 'Harry Potter', id: 2},
    {title: 'Ulysess', id: 3}
    ]

    app.use(singleBook);
app.get("/books",function(req,res){
    res.send(books);
});
 
app.listen(4000,()=>{
    console.log("Listening to port 4000")
})

function allbooks(req, res, next){
    console.log("Fetching all books")
    next();
}

function singleBook(req, res, next){
    console.log( books);
    next();
}