const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var today = new Date();
    var day = ""
    if (today.getDate() === 6 || today.getDay() === 0 ){
        day = "Weekend"
        res.render('list', {kindOfDay: day})
    } else {
        day = "Work day"
        res.render('list', {kindOfDay: day});
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})