// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
const student = {
      name: "Andrew",
      specialty: "philology",
      gpa: 4,
      missedClasses: 10,
      showInfo: function () {
        console.log(
          "Ім'я: " + this.name + "." + " Спеціальність: " + this.specialty + "." +  " Cередній бал: " + this.gpa + "." + "  Загальна кількість пропущених занять: " + this.missedClasses + "."
        );
      },
    };
const nikita = {
    name: "Nikita",
    specialty: "metrology",
    gpa: 5,
    missedClasses: 3,
};

const ann = {
    name: "Anna",
    specialty: "choreography",
    gpa: 2,
    missedClasses: 22,
};

const olga = {
    name: "Olga",
    specialty: "economist",
    gpa: 5,
    missedClasses: 10,
};

student.showInfo();
student.showInfo.call(nikita);
student.showInfo.call(ann);
student.showInfo.call(olga);

student.showInfo.bind(nikita)();
student.showInfo.bind(ann)();
student.showInfo.bind(olga)();

student.showInfo.apply(nikita);
student.showInfo.apply(ann);
student.showInfo.apply(olga);


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

console.log("------------");

const whatItIs = {
    showInfo() {
        console.log(this.definition);
    },
};

const html = {
    definition: "HTML (англ. HyperText Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері."
};
const css = {
    definition: "CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду.",
};

console.log(document.querySelector("test"));
document.querySelector("#html").addEventListener("click", whatItIs.showInfo.bind(html));
document.querySelector("#css").addEventListener("click", whatItIs.showInfo.bind(css)); 

console.log("------------");

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4


function howMany() {
    return function(price, quantity) {
        return price * quantity;
    };
}
const product = howMany("cherry");

console.log(product(58, 1.3));