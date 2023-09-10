//posts 변수를 수정하지 마세요.
const posts = [
    { title: "Post 1", body: "첫번째 게시글입니다." },
    { title: "Post 2", body: "두번째 게시글입니다." },
    { title: "Post 3", body: "세번째 게시글입니다." },
    { title: "Post 4", body: "네번째 게시글입니다." },
    { title: "Post 5", body: "다섯번째 게시글입니다." },
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output = output + `<li>${post.title}<br> 내용: ${post.body} </li> `;
      });
      document.body.innerHTML = output;
      //postMessage.forEach((post, resolve))
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("error: wrong");
        }
      }, 2000);
    });
  }
  
  createPost({ title: "Post N", body: "N번째 게시글입니다." })
    .then(getPosts)
    .catch((err) => console.log(err));