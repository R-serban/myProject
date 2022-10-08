const express = require("express");
const app = express();
const fs = require("fs");
const contentTypes = require("./configs/config");
const urlParse = require("url").parse;
const urlencodedParser = express.urlencoded({ extended: false });
const database = require('./databases/sequelizemsql');


app.get('/site/:page/:file', (req, res) => {
    
    const url = req.path;
    if(url.includes('js')) {
        const jsfiles = fs.createReadStream("." + url, "utf-8");
        jsfiles.on("ready", (what) => {
            res.writeHead(200, { "Content-Type": contentTypes[".js"] });
            //res.statusCode = 200;
            //res.setHeader("Content-Type", contentTypes[".js"] );
            
        })
        jsfiles.on('data', (chunk) => {
            res.write(chunk);
            
        });

        jsfiles.on('end', () => {
            res.end();
        });

        jsfiles.on('error', (err) => {
            console.log(err);
        })
    }
});


app.get("/", (req, res) => {
    let urlType = urlParse(req.url, false)
    try{
        fs.accessSync("./site/html/main.html");
    } catch(e) {
        res.send("Page Not Found").status(404).end();
        console.log(e?.message);
    }


    const page = fs.createReadStream("./site/html/main.html", "utf-8");
    page.on("data", (chunk) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(chunk);
    });

    page.on('end', () => {s
        res.end();
    });

    page.on("error", (err) => {
        console.log(err);
    });

    
});


app.post("/", urlencodedParser , (req, res) => {
    
    console.log(req.body);
    res.writeHead(301, {
        Location: '/'
    });
    res.end();
})


app.listen(3000, () => {
    console.log("start");
})