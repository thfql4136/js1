
var data =[{
    datasets: [{
        data: [70],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
            'rgba(255,99,132,1)'
        ],
        hoverBackgroundColor:[
            'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 0
    }]
},{
labels: ["Red", "Blue", "Yellow"],
    datasets: [{
        data: [12, 19, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 0
    }]
},{
    labels: ["Red", "Blue", "Yellow"],
    datasets: [{
        data: [12, 19, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
},
];
var option = [{
    legend: {
        display: false,
    },
    cutoutPercentage:70,
    rotation: -1 * Math.PI,
    circumference: 1.4 * Math.PI,
    animation:{
        animateScale: true
    }
},{
    legend: {
        display: false,
    }
},{
    title: {
        display: true,
        text: 'Custom Chart Title',
        fontSize: 24,
        fontColor: "#f00"
    },
    tooltips: {
        enabled: false
    }
}];
var chart = [];
// var chart1 = $("#chart1");
var ctx = $(".chart")
ctx.each(function(i){
    chart[i] = new Chart($(this),{
        type: 'doughnut',
        data: data[i],
        options: option[i]
    });
    
});
/* var chart1 = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    option: option
    
}); */
