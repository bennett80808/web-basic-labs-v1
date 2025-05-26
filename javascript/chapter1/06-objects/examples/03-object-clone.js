const student = {
  name: "이학생",
  scores: {
    math: 90,
    english: 85,
  },
};

const shallowCopy = { ...student };
const deepCopy = JSON.parse(JSON.stringify(student));

shallowCopy.scores.math = 70;

console.log(student.scores.math); // 70 (얕은 복사로 원본 영향 O)
console.log(deepCopy.scores.math); // 90 (깊은 복사로 원본 영향 X)

// name 도 비교해보기 - 기본형
console.log(shallowCopy.name); // 이학생
shallowCopy.name = "김학생";
console.log(student.name); // 이학생
console.log(deepCopy.name); // 이학생
console.log(shallowCopy.name); // 김학생

// "name"은 문자열(string) — 즉, **기본형(Primitive Type)**이기 때문에
// 얕은 복사를 하더라도 값 자체가 복사되기 때문이야.
// 그래서 shallowCopy.name을 바꿔도 student.name은 영향받지 않아.

//     항목	                          설명
// ✅ 기본형 (문자열, 숫자, 불리언 등)	  복사할 때 값 자체가 복사됨 → 서로 독립
// ⚠️ 참조형 (객체, 배열 등)	          복사할 때 참조(주소)가 복사됨 → 서로 연결됨

// 얕은 복사 vs 깊은 복사 개념 숙지!! 중요!
