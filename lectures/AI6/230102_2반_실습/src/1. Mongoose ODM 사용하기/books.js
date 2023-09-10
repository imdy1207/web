var express = require("express");
var Book = require("../models/book");
var router = express.Router();

// 4. 모든 book 데이터를 조회하는 라우터를 완성하세요.
router.use('/', async (req, res) => {
    const books = await Book.find().lean();
    res.send(books);
  });
  
module.exports = router;