const { Schema } = require('mongoose');

//1. 댓글의 스키마 CommentSchema를 작성하세요.
const CommentSchema = new Schema({
  // content, String, required,
  // author, User, required
  content : {type:String, required: true},
  author : {type: Schema.Types.ObjectId, ref:'User', required:true}
}, {
  timestamps: true,
});

module.exports = CommentSchema;