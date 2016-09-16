'use strict';

var axis = document.querySelectorAll(".axis");

axis.forEach(function (item, i, arr) {
  var rotate = item.querySelector(".rotate_control"), //регулятор угла поворота
    spinner = item.querySelector(".spinner_segment"), //вращающийся сегмент
    numOfRevo = item.querySelector(".num_of_revo"); //количество оборотов
  rotate.addEventListener('input', function () {
    spinner.style.cssText = "transform: rotate(" + (rotate.value * numOfRevo.value - 90) + "deg)";
  }, false);
});



function timeIntervalRotation(angle) {
  var i,
    intervalID,
    rotate = document.querySelector(".rotate_control"), //регулятор угла поворота
    spinner = document.querySelector(".spinner_segment");
  for (i = 0; i < 4; i++) {
    spinner.style.cssText = "transform: rotate(" + (angle * i - 90) + "deg)";
    window.setInterval(i, 1000);
//    window.clearInterval(intervalID);
  }
}


//function rotateSegment(a) {
//  axis.forEach(function (item, i, arr) {
//    var rotate = item.querySelector(".rotate_control"), //регулятор угла поворота
//      spinner = item.querySelector(".spinner_segment"); //вращающийся сегмент
//    //      numOfRevo = item.querySelector(".num_of_revo"); //количество оборотов
//    
//    spinner.style.cssText = "transform: rotate(" + (a - 90) + "deg)";
//         
//  });
//}







//rotateSegment();
//wideAngleSegment();

axis.forEach(function (item, i, arr) {
  var wide = item.querySelector(".wide_control"), //регулятор угла обзора
    width_left = item.querySelector(".spinner_segment_before"),
    width_right = item.querySelector(".spinner_segment_after");
  wide.addEventListener('input', function () {
    width_left.style.cssText = "transform: rotate(" + (45 + parseInt(wide.value, 10)) + "deg)";
    width_right.style.cssText = "transform: rotate(" + (45 - parseInt(wide.value, 10)) + "deg)";
  }, false);
});

function wideAngleSegment(angleWidth) {
  axis.forEach(function (item, i, arr) {
    var wide = item.querySelector(".wide_control"), //регулятор угла обзора
      width_left = item.querySelector(".spinner_segment_before"),
      width_right = item.querySelector(".spinner_segment_after");
    width_left.style.cssText = "transform: rotate(" + (45 + (180 - angleWidth) / 2) + "deg)";
    width_right.style.cssText = "transform: rotate(" + (45 - (180 - angleWidth) / 2) + "deg)";
  });
}
