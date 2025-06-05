// function getUser(id, callback) {
//   setTimeout(() => callback(null, { id, name: "Kim JS" }), 500);
// }
// function getPostsByUser(user, callback) {
//   setTimeout(
//     () => callback(null, [`${user.name}의 게시글1`, `${user.name}의 게시글2`]),
//     500
//   );
// }
// function getCommentsByPost(post, callback) {
//   setTimeout(() => callback(null, [`${post}에 댓글1`, `${post}에 댓글2`]), 500);
// }

function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Kim js" }, 500);
    });
  });
}

function getPostsByUser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`${user.name}의 게시글1`, `${user.name}의 게시글2`], 500);
    });
  });
}

function getCommentsByPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`${post}에 댓글1`, `${post}에 댓글2`], 500);
    });
  });
}

// 프로미스 함수 실행
getUser(1)
  .then((user) => getPostsByUser(user))
  .then((posts) => getCommentsByPost(posts))
  .then((comments) => console.log(comments));
