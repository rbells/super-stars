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

app.post('/api/usersearch', (req,res)=>{
    
    const search = req.body.search;
    const userSearch = "SELECT * FROM users WHERE username LIKE '%" + search + "%';"
    
    console.log(userSearch);

    db.query(userSearch, (err,result)=>{
        res.send(result);
        console.log(result);
    })
});

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

app.post('/api/rating', (req,res)=>{

    const title = req.body.title;
    const rating = req.body.rating;
    const review = req.body.review;
    const user_id = req.body.user_id;

    const sqlInsertReview = "INSERT INTO ratings(title, user_id, rating, review) VALUES (?, ?, ?, ?);"
    db.query(sqlInsertReview, [title, user_id, rating, review], (err,result)=>{
        console.log(err);
    });
});

app.post('/api/getposts', (req,res)=>{
    const userID = req.body.userID; 

    const sqlSelectPosts = "SELECT * FROM ratings WHERE user_id = ? ORDER BY id DESC;"
    db.query(sqlSelectPosts, [userID], (err,result)=>{
            res.send(result);
    });
})

app.post('/api/IDtoUsername', (req,res)=>{
    const ID = req.body.ID; 

    const sqlGetUsername = "SELECT username FROM users WHERE id=?;"
    db.query(sqlGetUsername, ID, (err,result)=>{
            res.send(result);
    });
})


app.listen(3001, () => {
    console.log("running on port 3001");
});