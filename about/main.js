var config = {
    data: {
        datasets: [{
            data: [
                78, 49, 51, 79, 83, 64, 82, 28
            ],
            backgroundColor: [
                "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#711baa", "#32492a", "#177ce3"
            ],
            label: 'My dataset'
        }],
        labels: ["JavaScript", "TypeScript", "Express", "HTML", "CSS", "Gulp, Webpack", "Git", "Angular"]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top'
        },
        title: {
            display: true

        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: true,
            animateScale: true,
            animationSteps: 150
        }
    }
};
var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart.PolarArea(ctx, config);

window.onload = function() {
    chart.update();
};

var navId = 1;

var span = document.getElementById("span");
var counter = 0;
var _array = ["stuff", "websites", "Javascript", "CSS", "webapps", "designs", "MEAN", "self awareness", "good habits", "sense of beauty", "fire"];
setInterval(function() {
    counter === _array.length - 1 ? counter = 0 : counter++;
    span.innerHTML = _array[counter];
}, 1000);


function visible(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

window.addEventListener("keyup", function() {
    event.keyCode === 39 && navId++;
    event.keyCode === 37 && navId--;
    navId > 2 ? navId = 2 : navId < 1 ? navId = 1 : null;
    window.location.href = "#page-" + navId;
    window.myPolarArea = Chart.PolarArea(ctx, config);
    visible(ctx) && window.myPolarArea.update();
});