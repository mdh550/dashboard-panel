function overBox (box,p,h) {
    document.querySelector(box).style.border= "1px solid #3751FF";
    document.querySelector(box).style.boxShadow= "0px 0px 10px rgba(55, 81, 255,.11)";
    document.querySelector(p).style.color= "#3751FF";
    document.querySelector(h).style.color= "#3751FF";
}

function outBox (box,p,h) {
    document.querySelector(box).style.border= "1px solid #DFE0EB";
    document.querySelector(box).style.boxShadow= "";
    document.querySelector(p).style.color= "#9FA2B4";
    document.querySelector(h).style.color= "#252733";
}



var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
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