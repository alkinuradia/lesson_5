// // 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// // бал і кількість пропущених занять
// // 2) написати метод який буде виводити цю інформацію
// // 3) написати три варіанти студентів
// // 4) прикріпити знначення за допомогою call apply bind
// const student = {
//       name: "Andrew",
//       specialty: "philology",
//       gpa: 4,
//       missedClasses: 10,
//       showInfo: function () {
//         console.log(
//           "Ім'я: " + this.name + "." + " Спеціальність: " + this.specialty + "." +  " Cередній бал: " + this.gpa + "." + "  Загальна кількість пропущених занять: " + this.missedClasses + "."
//         );
//       },
//     };
// const nikita = {
//     name: "Nikita",
//     specialty: "metrology",
//     gpa: 5,
//     missedClasses: 3,
// };

// const ann = {
//     name: "Anna",
//     specialty: "choreography",
//     gpa: 2,
//     missedClasses: 22,
// };

// const olga = {
//     name: "Olga",
//     specialty: "economist",
//     gpa: 5,
//     missedClasses: 10,
// };

// student.showInfo();
// student.showInfo.call(nikita);
// student.showInfo.call(ann);
// student.showInfo.call(olga);

// student.showInfo.bind(nikita)();
// student.showInfo.bind(ann)();
// student.showInfo.bind(olga)();

// student.showInfo.apply(nikita);
// student.showInfo.apply(ann);
// student.showInfo.apply(olga);


// // --2--
// // Написати дві кнопки і закріпити на них функції
// // при натисканні на кнопку html - має видати коротке визначення що це таке
// // при натисканні на кнопку css - має видати коротке визначення що це таке

// console.log("------------");

// const whatItIs = {
//     showInfo() {
//         console.log(this.definition);
//     },
// };

// const html = {
//     definition: "HTML (англ. HyperText Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."
// };
// const css = {
//     definition: "CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
// };

// console.log(document.querySelector("test"));
// document.querySelector("#html").addEventListener("click", whatItIs.showInfo.bind(html));
// document.querySelector("#css").addEventListener("click", whatItIs.showInfo.bind(css)); 

// console.log("------------");

// // Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// // функція має повертати назву товару і вартість
// // перевірити на варіантах:
// // 1) banana 30, 4,5
// // 2) cherry 58, 1,3
// // 3) jrange 89. 3,4

const product = "";
const price = "";
const quantity = ""

function howMany( product, price, quantity) {
    return result = quantity * price;
}
console.log(howMany("banana", 30, 4.5));

// const summ = 20000;
// const month = 12;
// const p = 1000;

// const credit = (sum, date, p) => {
//   return sum + p * date;
// };

// console.log(credit(summ, month, p));

// // const a = [1, 2, 3];
// // console.log(a);

// const dog = {
//     dogName: "Pancake",
//     legs: 4,
//     isAwesome: true
// };
// console.log(dog.dogName);
// console.log(dog);
// dog.bark = function() {
//     console.log("Woof woof! My name is " + this.dogName + "!");
// };
// console.log(dog.bark());

console.log("----------")

// const speak = function() {
//     console.log(this.sound + "!" + "My name is " + this.name + "!");
// };

// const cat = {
//     name: "Leva",
//     sound: "Meow",
//     speak: speak
// };
// console.log(cat.speak());
// const pig = {
//     name: "Hru",
//     sound: "Charlie",
//     speak: speak
// };

// const horse = {
//     name: "Igogoooo",
//     sound: "Marlee",
//     speak: speak
// };
// console.log(horse.speak());
// console.log(pig.speak());

const animal = {
    legs: 4,
  };
  const dog = Object.create(animal);
  dog.name = "Манго";
  
  console.log(dog); // { name: 'Манго', __proto__: animal }
//   console.log(animal.isPrototypeOf(dog)); // true
// console.log(animal);


class User {
    // Синтаксис оголошення методу класу
    constructor(name, email) {
      // Ініціалізація властивостей екземпляра
      this.name = name;
      this.email = email;
    }
  }
  
  const mango = new User("Манго", "mango@mail.com");
  console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }
  
  const poly = new User("Поли", "poly@mail.com");
  console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }