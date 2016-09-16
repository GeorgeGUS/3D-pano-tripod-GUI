'use strict';

var axis = document.querySelectorAll(".axis");

function rotateSegment(angle, numRev) {
  axis.forEach(function (item, i, arr) {
    var rotate = item.querySelector(".rotate_control"), //регулятор угла поворота
      spinner = item.querySelector(".spinner_segment"), //вращающийся сегмент
      numOfRevo = item.querySelector(".num_of_revo"); //количество оборотов
    if (angle === undefined && numRev === undefined) {
      rotate.addEventListener('input', function () {
        spinner.style.cssText = "transform: rotate(" + (rotate.value * numOfRevo.value - 90) + "deg)";
      }, false);
    } else {
      spinner.style.cssText = "transform: rotate(" + (angle * numRev - 90) + "deg)";
    }
  });
}

function wideAngleSegment(angleWidth) {
  axis.forEach(function (item, i, arr) {
    var wide = item.querySelector(".wide_control"), //регулятор угла обзора
      width_left = item.querySelector(".spinner_segment_before"),
      width_right = item.querySelector(".spinner_segment_after");
    if (angleWidth === undefined) {
      wide.addEventListener('input', function () {
        angleWidth = parseInt(wide.value, 10);
        width_left.style.cssText = "transform: rotate(" + (45 + angleWidth) + "deg)";
        width_right.style.cssText = "transform: rotate(" + (45 - angleWidth) + "deg)";
      }, false);
    } else {
      width_left.style.cssText = "transform: rotate(" + (45 + (180 - angleWidth) / 2) + "deg)";
      width_right.style.cssText = "transform: rotate(" + (45 - (180 - angleWidth) / 2) + "deg)";
    }
  });
}
rotateSegment(30);
wideAngleSegment();

function timeIntervalRotation() {
//  window.setTimeout(rotateSegment, 1000);
//  for (var i = 0; i < 5; i++) {
  rotateSegment(30);
//  }
}
