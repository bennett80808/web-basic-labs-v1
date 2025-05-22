const user = {
  name: "지수",
  age: 28,
  city: "Seoul",
};
// 객체의 키(key) 또는 배열의 인덱스를 순회함
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
