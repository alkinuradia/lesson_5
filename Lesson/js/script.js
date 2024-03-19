//замикання

// function createNewSum(n) {
//     return function() {
//         console.log(10 * n);
//     };
// }
// const calc = createNewSum(6);
// calc(); // 60

// function createNewNumber(n) {
//     return function(num) {
//         return n + num;
//     };
// }
// const addFive = createNewNumber(5);
// console.log(addFive(10)); //15. бо першим аргуметом ми передали 5(n), а другим у консолі 10
// console.log(addFive(20)); // 25. бо першим аргуметом ми передали 5(n), а другим у консолі 20


// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google"));
// console.log(comUrl("fb"));

// console.log(comUa("google"));
// console.log(comUa("fb"));

//_________________________//
//_________________________//
//this

// function hello() {
//   console.log("hello", this);
// }

// hello();

// const user = {
//   name: "Ivan",
//   city: "Odesa",
//   sayHello: hello,
// };

// user.sayHello();
//-----

// function abc() {
//   console.log("В функції");
//   console.log(this);
// }

// abc();

// document.querySelector("p").onclick = abc;

// function changeColor() {
//   this.style.background = "green";
// }

// // document.querySelector("div").onclick = changeColor;

// let user = document.querySelectorAll("div");

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

//-----------

// const showList = () => {
//   console.log(this);
// };

// showList();

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// };

// list.showList();

//========= bind

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// const Ann = {
//   name: "Anna",
//   age: 23,
// };

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(Ann)("Kyiv");

// const nataInfo = user.info.bind(Nata, "Odesa");
// nataInfo();

//========= call

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// userInfo.logInfo.call(Vano, "developer");

//apply

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);

///////////////////////////////////
///////////////////////////////////

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };

// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };

// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "3")();

////////

const cart = {
  showItems() {
    console.log("В корзині: ", this.items);
  },
};

const woman = {
  items: ["Сукня, туфлі"],
};

const man = {
  items: ["Костюм, рубашка"],
};

const child = {
  items: ["майка, шорти"],
};

document
  .querySelector("#wom")
  .addEventListener("click", cart.showItems.bind(woman));

document
  .querySelector("#man")
  .addEventListener("click", cart.showItems.bind(man));

document
  .querySelector("#kid")
  .addEventListener("click", cart.showItems.bind(child));
// ////

// const infoCar = {
//   name: "BMW",
//   model: "M7",
//   color: "white",
//   showInfo: function () {
//     console.log(
//       "Car: " + this.name + " model: " + this.model + " color: " + this.color
//     );
//   },
// };

// car2 = {
//   name: "Opel",
//   model: "XXX",
//   color: "red",
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);



// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(petya.username);
//   },
// };

// petya.showName();
////////////////////////////////////////

// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//       return this.authors;
//     },
//     addAuthor(authorName) {
//       this.authors.push(authorName);
//     },
//   };
  
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
//   bookShelf.addAuthor("Лі Таніт");
//   console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]
  
//Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. 
//Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

// function foo() {
//     console.log(this);
// }
  
// foo(); // this у глобальній області видимості

//   //this в методі об'єкта
// const petya = {
//     username: "Petya",
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.username);
//     },
//   };
  
// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'
  
// //Метод call()​

// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Полі",
//   };
  
//   greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
//   greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.
  
//Метод bind()​
// Методи call і apply викликають функцію «на місці», тобто відразу.
// Але у разі колбек-функцій, коли необхідно не відразу викликати функцію, а передати посилання на неї, причому з прив'язаним контекстом, використовується метод bind.
// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.

// function greet(clientName) {
//    return console.log(`${clientName}, ласкаво просимо в «${this.service}».`);
// }
  
// const steam = {
//     service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."
  
// const gmail = {
// service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Полі"); // "Полі, ласкаво просимо в «Gmail»."
  
