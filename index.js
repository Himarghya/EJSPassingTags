import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
// For constant values
const port = 3000;
const app = express();
const __dirName = dirname(fileURLToPath(import.meta.url));
var FName = "";
var LName = "";
let length ;
//for middleware
app.use(bodyParser.urlencoded({extended: true}));

//for sending the file
app.get("/" , (req, res) =>{
    const text = {
        htmlContent : "Enter your text below "
    }
   res.render("index.ejs" , text );
})
app.post("/submit" , (req, res) =>{
    FName =  req.body["FirstName"];
    LName = req.body["LastName"];
    length = FName.length + LName.length;
    const text = {
        htmlContent : `There are ${length} words in the name` 
    }
   res.render("index.ejs" , text );
})
// Listening at Port 3000
app.listen(port , ()=>{
    console.log(`Listening to port ${port}`);
})