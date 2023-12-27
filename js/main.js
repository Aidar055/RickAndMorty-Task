// Import stylesheets

// Запросы. Домашняя работа
let API = "https://rickandmortyapi.com/api/character";
let API2 = "http://localhost:8001/task";
/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
let list = document.querySelector(".list");
async function task(err) {
  let res = await fetch(API);
  let data = await res.json();
  data.results.forEach((element) => {
    list.innerHTML += `<div class="container1">
    <div class="name">${element.name}</div>
    <div class="image">
      <img id="img_id" src="${element.image}" alt="" />
    </div>
    </div>`;
  });
}
task();
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
// task1();
// async function task1() {
//   let res = await fetch(API);
//   let data = await res.json();
//   data.results.forEach((elem) => {
//     fetch(API2, {
//       method: "POST",
//       headers: { "Content-type": "application/json; charset=utf-8" },
//       body: JSON.stringify(elem),
//     });
//   });
// }
// Задание №1.4.
// А теперь сделайте запрос на локальный сервер.
// Во второй блок с классом 'block-2', отобразите имена, которые
// вы получили (стянули) с db.json.
let task4 = document.querySelector(".list2");
async function task5(e) {
  let res = await fetch(API2);
  let data = await res.json();
  data.forEach((elem) => {
    task4.innerHTML += `<div class= "container1"><div class="name_block2">${elem.name}</div>
    <div class="name_block2">
    <img id="img_block2" src="${elem.image}" alt="">
</div>
</div>`;
  });
}
task5();
// Задание №1.5.
// К именам добавьте картинки персонажей.
// В итоге у вас должна получиться точная копия первых двух тасков.
// Отличие которых лишь в базе данных.
