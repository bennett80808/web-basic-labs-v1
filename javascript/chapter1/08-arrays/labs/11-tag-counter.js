/*
게시글들의 해시태그들을 모아서 각 해시태그별로  몇 번 등장했는지 세어보세요.
*/

const posts = [
  { title: "첫 글", tags: ["#daily", "#fun"] },
  { title: "맛집 후기", tags: ["#food", "#daily"] },
  { title: "운동 루틴", tags: ["#fitness", "#health"] },
];

// TODO: 모든 태그를 하나의 배열로 합친 후, reduce로 개수 세기
const allTags = posts.flatMap((post) => post.tags);

let tagCount = {};

allTags.forEach((tag) => {
  if (tagCount[tag]) {
    tagCount[tag]++;
  } else {
    tagCount[tag] = 1;
  }
});

console.log(tagCount);

const tagCounts = allTags.reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  //(acc[tag] || 0) acc[tag] : 값이 undefined이거나 falsy한 값이면
  // → 0을 대신 사용해라.
  return acc;
}, {});

console.log(tagCounts);
