const ctx = document.getElementById("covidchart");
if (ctx){
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: ["2005", "2007" , "2009" , "2012", "2014"],
        datasets: [
        { label: 'HouseHold income',
        data: [5000,8000,10000,1200,15000],
        backgroundColor :['rgba(255, 129, 102, 1)',
        'rgba(234, 162, 235, 1)',
        'rgba(255, 206, 36, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        ],
        }
        ]
        },
        options: {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        }
        }
        });
}