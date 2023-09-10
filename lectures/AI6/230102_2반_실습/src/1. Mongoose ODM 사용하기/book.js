var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//3. 책에 대한 정보(책 제목, 저자, 카테고리)를 문자열(String)으로 담는 BookSchema를 생성하세요.
var BookSchema = new Schema({
    title : {type: String, reuired: true},
    author : {type: String, reuired: true},
    category : {type: String, reuired: true}
});

module.exports = mongoose.model("Book", BookSchema);
