// **"생성자 함수 방식과 클래스(class) 방식은 본질적으로 같은 동작을 하지만,
//  문법적으로 다르다"**

// 생성자 함수 방식
function Student(name, major) {
  this.name = name;
  this.major = major;
}
// 메모리 최적화 (함수 공유)
Student.prototype.introduce = function () {
  console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
};

const s1 = new Student("윤학생", "컴퓨터공학");
s1.introduce();

// 클래스 방식
class StudentClass {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  introduce() {
    console.log(`안녕하세요, ${this.major} 전공 ${this.name}입니다.`);
  }
}

const s2 = new StudentClass("김학생", "심리학");
s2.introduce();
