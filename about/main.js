var config = {
    data: {
        datasets: [
            {
                data: [
                    78, 34, 56, 79, 83, 64, 82, 28
                ],
                backgroundColor: [
                    "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360","#711baa", "#32492a", "#177ce3"
                ],
                label: 'My dataset'
            }
        ],
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
            animateScale: true
        }
    }
};
window.onload = function() {
    console.log(1);
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myPolarArea = Chart.PolarArea(ctx, config);
        window.myPolarArea.update();

};