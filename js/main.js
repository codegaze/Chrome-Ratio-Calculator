var input_width = document.getElementById('width'),
    input_height = document.getElementById('height'),
    number_a = document.getElementById('number_a'),
    number_b = document.getElementById('number_b');

input_width.onkeyup = function() {
  calcRatio(input_height, this, number_b, number_a);
}

input_height.onkeyup = function() {
  calcRatio(input_width, this, number_a, number_b);
}

number_a.onkeyup = function() {
  calcRatio(input_width, input_height, this, number_b);
}

number_b.onkeyup = function() {
  calcRatio(input_height, input_width, this, number_a);
}


function calcRatio(el_result,el_a,el_b,el_c) {
  el_result.value = Math.round((el_a.value * el_b.value) / el_c.value);
}