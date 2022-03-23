function travel(x = "زحل") {
  console.log("أود السفر إلى كوكب " + x);
}

let planet = prompt("اذكر اسم الكوكب الذي تود الذهاب اليه");

travel(planet);
travel();

(function travel(x = "زحل") {
  console.log("أود السفر الى كوكب" + x);
})(planet);

(function travel(x = "زحل") {
  console.log("أود السفر الى كوكب" + x);
})();
