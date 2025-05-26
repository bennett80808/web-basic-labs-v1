// 명시적(강제)/암시적(자동) 타입 변환
console.log("=== 타입 변환 ===");

// 숫자로 변환
console.log(Number("123")); // 123
<<<<<<< HEAD
console.log(Number("abc")); // NaN(not a number)
=======
console.log(Number("abc")); // NaN
>>>>>>> upstream/main

// 문자열로 변환
console.log(String(456)); // "456"

<<<<<<< HEAD
// 불리언으로 변환. 중요
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true

console.log(Boolean("false")); // true
console.log(Boolean(-1)); // true
console.log(Boolean(undefined)); // false

console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
=======
// 불리언으로 변환 (*)
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false

if ("0") {
  console.log("설마 여기까지 오나?");
}
>>>>>>> upstream/main
