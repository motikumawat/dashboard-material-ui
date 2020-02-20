// A $(window).load() block.
$(window).on("load", function () {
  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset Blue",
      backgroundColor: "#1C7EBB75",
      borderColor: "#1C7EBB",
      borderWidth: 1,
      hoverBackgroundColor: "#1C7EBB",
      hoverBorderColor: "#000000",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };

  var data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset Yellow",
      backgroundColor: "#FF980075",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };



  var options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
    }
  };



  var data2 ={
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
    datasets: [{
      label: 'data-1',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: "#F98E33",
    }, {
      label: 'data-2',
      data: [30, 29, 5, 5, 20, 3, 10],
      backgroundColor: "#1C7EBB"
    }]
  };
  

  var oilData = {
    labels: [
      "Saudi Arabia",
      "Russia",
      "Iraq",
      "United Arab Emirates",
      "Canada"
    ],
    datasets: [{
      data: [133.3, 86.2, 52.2, 51.2, 50.2],
      backgroundColor: [
      '#E94B3B',
			'#39C7AA',
			'#1C7EBB',
      '#F98E33',
      '#e91e63'
      ],
    }]
  };
 
  var myBarChart = new Chart('chart', {
    type: 'bar',
    data: data2,
    options: options
  });
  var myBarChart1 = new Chart('chart1', {
    type: 'line',
    data: data1,
    options: options
  });
  var pieChart = new Chart('chart2', {
    type: 'pie',
    data: oilData
  });
  var myDoughnutChart = new Chart('chart3', {
    type: 'doughnut',
    data: oilData
  });
  var myBarChart2= new Chart('chart4', {
    type: 'bar',
    data: data2,
  });

});