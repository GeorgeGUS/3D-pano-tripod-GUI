//'use strict';
/* jslint node: true */


var document,
  window,
  axisAll = document.querySelectorAll(".axis"),
  axisX = document.querySelector("#X-axis-spinner"),
  axisY = document.querySelector("#Y-axis-spinner");

function rotateAxisBySlider(axis) {
  'use strict';
  var rotate = axis.querySelector(".rotate_control"), //регулятор угла поворота
    spinner = axis.querySelector(".spinner_segment"), //вращающийся сегмент
    numOfRevo = axis.querySelector(".num_of_revo"); //количество оборотов
  rotate.addEventListener('input', function () {
    spinner.style.transform = "rotate(" + (rotate.value * numOfRevo.value - 90) + "deg)";
  }, false);
}

rotateAxisBySlider(axisX);
rotateAxisBySlider(axisY);

function rotateAxisByLoop(numRev) {
  'use strict';
  var i;
  //    var axis = document.querySelector("#X-axis-spinner"),
  //      spinner = axis.querySelector(".spinner_segment");
  for (i = 1; i <= numRev; i += 1) {
    document.querySelector(".spinner_segment").style.transform = "rotate(" + (45 * i - 90) + "deg)";
  }
}

function wideAngleSegment(angleWidth) {
  'use strict';
  axisAll.forEach(function (item, i, arr) {
    var wide = item.querySelector(".wide_control"), //регулятор угла обзора
      width_left = item.querySelector(".spinner_segment_before"),
      width_right = item.querySelector(".spinner_segment_after");
    width_left.style.cssText = "transform: rotate(" + (45 + (180 - angleWidth) / 2) + "deg)";
    width_right.style.cssText = "transform: rotate(" + (45 - (180 - angleWidth) / 2) + "deg)";
  });
}


var startBtn = document.querySelector("#startBtn"),
  spinner = document.querySelector(".spinner_segment");

startBtn.onclick = function () {
  'use strict';
  var angleWidth = 45;
  wideAngleSegment(angleWidth); // задать ширину угла сегмента
  var start = Date.now(), // сохранить время начала
    timer = setInterval(function () {
      // вычислить сколько времени прошло с начала анимации
      var timePassed = Date.now() - start;

      spinner.style.transform = "rotate(" + (angleWidth * (timePassed / 1000) - 90) + "deg)";
      document.querySelector("#timerID").innerHTML = timePassed / 1000;

      if (timePassed >= 8000) {
        clearInterval(timer);
//        spinner.style.transform = "rotate(-90deg)";
        return;
      }
      
    }, 250);
};








function rotateAxisByFunction(a) {
  'use strict';
  axisAll.forEach(function (item, i, arr) {
    var rotate = item.querySelector(".rotate_control"), //регулятор угла поворота
      spinner = item.querySelector(".spinner_segment"); //вращающийся сегмент
    //      numOfRevo = item.querySelector(".num_of_revo"); //количество оборотов    
    spinner.style.cssText = "transform: rotate(" + (a - 90) + "deg)";
  });
}







//rotateSegment();
//wideAngleSegment();



axisAll.forEach(function (item, i, arr) {
  'use strict';
  var wide = item.querySelector(".wide_control"), //регулятор угла обзора
    width_left = item.querySelector(".spinner_segment_before"),
    width_right = item.querySelector(".spinner_segment_after");
  wide.addEventListener('input', function () {
    width_left.style.cssText = "transform: rotate(" + (45 + parseInt(wide.value, 10)) + "deg)";
    width_right.style.cssText = "transform: rotate(" + (45 - parseInt(wide.value, 10)) + "deg)";
  }, false);
});


