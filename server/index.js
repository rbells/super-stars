const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "cheese",
    database: "userdb"
})

app.use(cors({
    origin:["http://localhost:3000" ],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userID",
    secret: "chapstick",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 30000 * 60
    },
}))

app.post('/api/login', (req,res)=>{

    const givenUsername = req.body.givenUsername;
    const givenPassword = req.body.givenPassword;

    const sqlSelect = "SELECT * FROM users WHERE username = ? AND password = ?;"
    db.query(sqlSelect, [givenUsername, givenPassword], (err,result)=>{
        if (err){
            res.send({err: err});
        } 
        if(result.length > 0){
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
        }else{
            res.send({message: "Wrong Username or Password"});
        }
    });
});

app.get('/api/login', (req,res)=>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

app.post('/api/insert', (req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO users (username,password,firstName,lastName) VALUES (?,?,?,?);"
    db.query(sqlInsert, [username,password,firstName,lastName], (err,result)=>{
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});