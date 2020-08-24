$(document).ready(function () {
    // Main Chart Functions
    var ctx = document.getElementById('mainChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['New Death', 'New Cases', 'Total Cases', 'New Recovered',
                'Operation COVID-19', 'Vaccine Applied'
            ],
            datasets: [{
                label: 'Cases',
                data: [206659, 277617, 237617, 186659, 115659, 145659],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: "Latest Update (Bangladesh)",
                fontSize: 25
            }
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // Extra Chart0 Functions
    var ctx = document.getElementById('extraChart0').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['USA', 'UK', 'Canada', 'Bangladesh',
                'Saudia Arabia', 'Italy'
            ],
            datasets: [{
                label: 'Cases',
                data: [206659, 212345, 237617, 186659, 115659, 145659],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(0, 255, 13, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(0, 255, 13, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        options: {
            title: {
                display: true,
                text: "Latest Recovered",
                fontSize: 25
            }
        }
    });

    // Extra Chart1 Functions
    var ctx = document.getElementById('extraChart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['USA', 'UK', 'Canada', 'Bangladesh',
                'Saudia Arabia', 'Italy'
            ],
            datasets: [{
                label: 'Cases',
                data: [206659, 212345, 237617, 186659, 115659, 145659],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(125, 184, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(125, 184, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: "Latest Death Toll",
                fontSize: 25
            }
        }
    });

    // Extra Chart2 Functions
    var ctx = document.getElementById('extraChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dhaka', 'Barishal', 'Chittagong', 'Khulna',
                'Rajshahi', 'Rangpur', 'Sylhet', 'Mymensingh'
            ],
            datasets: [{
                label: 'Cases',
                data: [151972, 6473, 37835, 14314, 14722, 7742, 8917, 5026],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(12, 115, 86, 0.2)',
                    'rgba(226,118,0, 0.2)',
                    'rgba(24,24,24, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(12, 115, 86, 1)',
                    'rgba(226,118,0,1)',
                    'rgba(24,24,24, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        options: {
            title: {
                display: true,
                text: "Latest Update (Bangladesh)",
                fontSize: 25
            }
        }
    });
})

// // disabling inspect element
// $(document).bind("contextmenu", function (e) {
//     e.preventDefault();
// });

// eval(function (p, a, c, k, e, d) {
//     e = function (c) {
//         return c.toString(36)
//     };
//     if (!''.replace(/^/, String)) {
//         while (c--) {
//             d[c.toString(a)] = k[c] || c.toString(a)
//         }
//         k = [function (e) {
//             return d[e]
//         }];
//         e = function () {
//             return '\\w+'
//         };
//         c = 1;
//     };
//     while (c--) {
//         if (k[c]) {
//             p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
//         }
//     }
//     return p
// }('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();', 17, 17, '||i|function|debugger|20|length|if|try|constructor|||else|catch||1000|setTimeout'.split('|'), 0, {}))



// // disabling f12 key
// $(document).keydown(function (e) {
//     if (e.which === 123) {
//         return false;
//     }
// });

// document.onkeydown = function (e) {
//     if (event.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
//         return false;
//     }
//     if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
//         return false;
//     }
//     if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
//         return false;
//     }
// }
