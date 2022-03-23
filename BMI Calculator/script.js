// هنا سوف تنشئ دالة calculate
function calculate() {
  let height = document.getElementById("height").Value;
  let weight = document.getElementById("weight").Value;

  if (height == "" || weight == "") {
    alert("قم بالتأكد من تعبئة جميع بياناتك المطلوبة!");
    return;
  }

  let BMI = weight / (height * height);
  let status = "";

  if (BMI < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BMI < 25) {
    status = "وزنك صحي";
  } else if (BMI < 30) {
    status = "تعاني من زيادة في الوزن";
  } else {
    status = "تعاني من سمنة مفرطة";
  }

  BMI = BMI.toFixed(2);
  document.getElementById("result").innerHTML = BMI;
  document.getElementsByClassName("comment")[0].innerHTML = status;
}
