/*
상품을 가격순으로 오름차순 정렬한 뒤 출력하세요.
*/

const products = [
  { name: "Laptop", price: 1500000 },
  { name: "Tablet", price: 600000 },
  { name: "Phone", price: 1000000 },
];

// TODO: sort 사용 (price 기준 오름차순) b-a : 내림차순
products.sort((a, b) => a.price - b.price);

console.log(products);
