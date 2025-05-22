// 호이스팅: var vs let/const
console.log("=== 호이스팅 예제 ===");

console.log("hoistedVar:", hoistedVar);
// undefined 값이 초기화 되지 않은 상태
var hoistedVar = "var 변수";

// console.log("hoistedLet:", hoistedLet); // ❌ Error
let hoistedLet = "let 변수";

console.log("hoistedLet:", hoistedLet);
// 호이스팅: 변수와 함수 선언이 코드 실행 전에 "끌어올려지는" 현상
// 호이스팅은 모두 되나나
// const, let 은 초기화 전 접근 불가능
