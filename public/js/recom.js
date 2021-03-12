var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

if(document.getElementById('car').clicked && document.getElementById('bike').clicked === true)
{
   alert("button was clicked");
}

function myFunction1() {
    var num = Number(document.getElementById("myRange").value);
    if(num < 5000000){
        location.href="/car_1.html";
    }
    else if (num > 5000000 && num < 10000000){
        location.href="/car_2.html";
    }
    else {
        location.href="car_3.html";
    }
  }

  function myFunction2() {
    var num = Number(document.getElementById("myRange").value);
    if(num < 150000){
        location.href="/bike_1.html";
    }
    else if (num > 150000 && num < 500000){
        location.href="/bike_2.html";
    }
    else {
        location.href="bike_3.html";
    }
  }