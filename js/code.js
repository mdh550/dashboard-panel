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
