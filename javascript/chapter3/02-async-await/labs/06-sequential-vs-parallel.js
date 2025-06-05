/*
[문제] 아래 비동기 함수를 두 방식으로 호출해, 전체 실행 시간을 비교해보세요.

function asyncJob(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

- 1) await를 반복문(for of)에서 사용 (순차 실행)
- 2) Promise.all과 await로 병렬 실행

각 방식에서 콘솔로 각 작업의 시작/끝, 전체 소요시간을 출력해보세요.
*/
function asyncJob(ms) {
  return new Promise((resolve) => {
    console.log(`⏳ ${ms}ms 작업 시작`);
    setTimeout(() => {
      console.log(`✅ ${ms}ms 작업 완료`);
      resolve(ms);
    }, ms);
  });
}

//순차
async function runSequential() {
  const jobs = [1000, 2000, 3000]; // ms 단위
  const start = Date.now();

  for (const ms of jobs) {
    await asyncJob(ms);
  }

  const end = Date.now();
  console.log(`🕐 순차 실행 시간: ${end - start}ms`);
}

//병렬
async function runParallel() {
  const jobs = [1000, 2000, 3000]; // ms 단위
  const start = Date.now();

  const promises = jobs.map((ms) => asyncJob(ms));
  await Promise.all(promises);

  const end = Date.now();
  console.log(`🕐 병렬 실행 시간: ${end - start}ms`);
}

(async () => {
  console.log("\n--- [1] 순차 실행 시작 ---");
  await runSequential();

  console.log("\n--- [2] 병렬 실행 시작 ---");
  await runParallel();
})();
