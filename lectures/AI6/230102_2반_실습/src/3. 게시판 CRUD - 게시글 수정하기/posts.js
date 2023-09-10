
const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  if (req.query.write) {
    res.render('post/edit');
    return;

  }
  
  // 게시글 목록
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
});


router.get('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  // shortId 로 게시글 찾기

  const post = await Post.findOne({ shortId });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});


router.post('/', async (req, res, next) => {

  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력 해 주세요');
    }
    
    // 게시글 생성
    const post = await Post.create({
      title,
        content,
    });
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});




//shortId 로 게시글 수정하는 코드를 작성하세요. 게시글 생성과 코드가 거의 유사하지만 shortId를 새 요청값( req.params) 에 저장합니다.
router.post('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
 
  try {
    // shortId 로 게시글 찾기
    const { title, content } = req.body;
    var post = await Post.findOne({ shortId });
    console.log(post);

    if(!post)
        throw new Error('해당 게시물이 존재하지 않습니다.');

    if (!title || !content)
      throw new Error('제목과 내용을 입력 해 주세요');
    
    // 게시글 수정
    await Post.updateOne({
      shortId,
      title,
      content,
    });
    post = await Post.findOne({shortId});
    
    console.log(post);

    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }

  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});

module.exports = router;
