const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();
require('./config/passport')(passport);

// MongoDB Config
const db = require('./config/keys').mongoURI;

//1. 필요한 패키지를 import하세요.
const session = require('express-session');
const MongoStore = require("connect-mongo");

app.use(express.static("public"));

// MongoDB 데이터베이스 연결
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS 탬플릿
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body-parser 사용하기
app.use(express.urlencoded({ extended: true }));

//2. Session Store를 설정하세요.
app.use(
session({ 
    secret: 'elice', 
    resave: false, 
    saveUninitialized: true,
    //세션 스토어 사용하기
    store: MongoStore.create({
        mongoUrl: db,
    }),
}));



app.use(passport.initialize());
//3. passport에 세션을 등록하세요.
app.use(passport.session());



app.use(flash());


app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// 라우터
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));