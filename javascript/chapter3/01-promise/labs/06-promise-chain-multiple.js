/*
[문제] 여러 Promise 작업을 순차적으로 연결(체이닝)

아래 Promise 함수들로 1 → 2 → 3 순서로 실행해서,
최종 결과를 출력하세요.

function step1() {
  return new Promise(resolve => setTimeout(() => resolve("1단계 완료"), 300));
}
function step2() {
  return new Promise(resolve => setTimeout(() => resolve("2단계 완료"), 400));
}
function step3() {
  return new Promise(resolve => setTimeout(() => resolve("3단계 완료"), 500));
}

/*
[출력 예시]
1단계 완료
2단계 완료
3단계 완료
*/
// then 방식식
// 이건 화살표 오른쪽에 중괄호가 있으므로 return을 명시적으로 써야 해
// 그래서 step2()가 리턴되려면 반드시 return step2(); 라고 적어야 해
// 화살표 오른쪽에 중괄호 없음 : 화살표 오른쪽쪽이 자동으로 return됨
function step1() {
  return new Promise((resolve) => setTimeout(() => resolve("1단계 완료"), 300));
}
function step2() {
  return new Promise((resolve) => setTimeout(() => resolve("2단계 완료"), 400));
}
function step3() {
  return new Promise((resolve) => setTimeout(() => resolve("3단계 완료"), 500));
}

step1()
  .then((result1) => {
    console.log(result1); // "1단계 완료"
    return step2();
  })
  .then((result2) => {
    console.log(result2); // "2단계 완료"
    return step3();
  })
  .then((result3) => {
    console.log(result3); // "3단계 완료"
  })
  .catch((err) => {
    console.error("에러 발생:", err);
  });

async function runSteps() {
  try {
    const result1 = await step1();
    console.log(result1);

    const result2 = await step2();
    console.log(result2);

    const result3 = await step3();
    console.log(result3);
  } catch (err) {
    console.error("에러 발생:", err);
  }
}

runSteps();

// 1단계 완료
// 1단계 완료
// 2단계 완료
// 2단계 완료
// 3단계 완료
// 3단계 완료

// step1()을 포함한 then 체이닝과 runSteps() 내부 async/await 함수가 동시에 시작됐고,
// 각각의 step1, step2, step3이 비동기로 거의 같은 시간에 완료되기 때문에,
// 출력이 1단계 1단계 → 2단계 2단계 → 3단계 3단계처럼 번갈아 나타난 거야.

// 자바스크립트는 기본적으로 "싱글 스레드" + "동기적 언어"야.
// 그런데 브라우저나 Node.js 같은 환경이 **비동기 처리를 도와주는 기능(API)**을 제공하고,
// 그걸 Promise, setTimeout, fetch 같은 도구로 사용하는 것이야.

// Promise는 무조건 비동기인가요?
// ✅ 거의 항상 비동기처럼 작동하지만,  내부 로직은 동기일 수도 있음

// 동기 비동기 어떻게 구분?
// ✅ 3. 동기 vs 비동기 대표 정리표
// 타입	                                        동기	비동기
// let a = 1 + 2;	                                ✅	❌
// for, if, function	                            ✅	❌
// console.log()	                                ✅	❌
// setTimeout, setInterval	                      ❌	✅
// fetch, axios	                                  ❌	✅
// addEventListener	                              ❌	✅
// Promise.then, await, async함수                 ❌	✅
// while(true) {}	                                ✅	❌ (근데 프로그램 멈춤)

// async 키워드가 붙은 함수는 항상 Promise를 반환한다.
// await는 기다리지만, 그 "기다리는 동안" 자바스크립트는 "다른 작업을 계속 진행"한다.
// 즉, await는 그 함수 내부 실행을 멈추지만, 전체 프로그램(이벤트 루프)은 멈추지 않아.
