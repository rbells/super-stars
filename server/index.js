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

app.post('/api/reply', (req,res)=>{

    const user_id = req.body.user_id;
    const reply = req.body.reply;
    const original_id = req.body.original_id;

    const sqlInsertReview = "INSERT INTO replies(original_id, reply, user_id) VALUES (?, ?, ?);"
    db.query(sqlInsertReview, [original_id, reply, user_id], (err,result)=>{
        console.log(err);
    });
});

app.post('/api/seereplies', (req,res)=>{
    const original_id = req.body.original_id; 

    const sqlGetReplies = "SELECT * FROM replies WHERE original_id = ? ORDER BY id DESC;"
    db.query(sqlGetReplies, [original_id], (err,result)=>{
            res.send(result);
            console.log(result);
    });
})

app.post('/api/follow', (req,res)=>{
    const user_id = req.body.user;
    const friend_id = req.body.friend;

    const sqlFollow = "INSERT INTO friends(user_id, friend_id) VALUES (?, ?);"
    db.query(sqlFollow, [user_id, friend_id]), (err,result)=>{
        console.log(err);
    }
})

app.post('/api/getfriendslist', (req,res)=>{
    const userID = req.body.userID; 

    const sqlGetFriendsList = "SELECT * FROM friends WHERE user_id = ?;"
    db.query(sqlGetFriendsList, [userID], (err,result)=>{
            res.send(result);
    });
})

app.listen(3001, () => {
    console.log("running on port 3001");
});