const ctx = document.getElementById("covidchart").getContext('2d'),
        gradientC = ctx.createLinearGradient(0, 0, 980,0);

gradientC.addColorStop(0, 'rgba(55, 81, 255, 0.1)');
gradientC.addColorStop(1, 'rgba(55, 81, 255, 0)');



if (ctx){
    new Chart(ctx, {
        type: 'line',
  data: {
    labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    datasets: [{ 
        data: [12,20,25,28,29],
        borderColor: "#3751FF",
        borderWidth:'2',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        fill: true,
        backgroundColor: gradientC
      }, { 
        data: [10,20,50,30,20,10,5,9],
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: "#DFE0EB",
        fill: false
      }
    ]
  },
  options: {
    legend: {
        position:'right',
        display: false,
     },
    title: {
      display: false,
    }
  }
    });
}