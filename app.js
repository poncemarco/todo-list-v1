const express = require("express");
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date.js")

const app = express();

var items = ["Wake up at 7", "Drink water"];
let workItems = ["Write the essay"];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    let day = getDate.getDay();
    res.render("list", {
        items: items,
        listTitle: "ToDo  " + day,
        
    })
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    console.log(req.body.list);
    if (req.body.list === "W ork"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work", items: workItems});
});
app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/")
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});