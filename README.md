# flx-qrcode

## Install
add jayuda:flx-chart to your project

## Usage
HTML template to display
```html
<template name="chartsExample">
    {{>flxchart tipe="BAR" id="bar" data=dataLine width="300" height="200"}}
    {{>flxchart tipe="LINE" id="line" data=dataLine width="300" height="200"}}
    {{>flxchart tipe="RADAR" id="radar" data=dataRadar width="200" height="200"}}
    {{>flxchart tipe="DOUGHNUT" id="donat" data=dataCircle width="200" height="200"}}
    {{>flxchart tipe="PIE" id="pie" data=dataCircle width="200" height="200"}}
    {{>flxchart tipe="POLAR" id="polar" data=dataCircle width="200" height="200" }}
</template>
```
Create Helper on javascript file
```javascript
Template.chartsExample.helpers({
	dataLine: function () {
		var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [random(), random(), random(), random(), random(), random(), random()]
			}, {
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [random(), random(), random(), random(), random(), random(), random()]
			}]
		};
		return data;
	},
	dataCircle: function () {
		var data = [
			{
				value: random(),
				color: "#F7464A",
				highlight: "#FF5A5E",
				label: "Red"
			},
			{
				value: random(),
				color: "#46BFBD",
				highlight: "#5AD3D1",
				label: "Green"
			}, {
				value: random(),
				color: "#FDB45C",
				highlight: "#FFC870",
				label: "Yellow"
			}, {
				value: random(),
				color: "#949FB1",
				highlight: "#A8B3C5",
				label: "Grey"
			}, {
				value: random(),
				color: "#4D5360",
				highlight: "#616774",
				label: "Dark Grey"
			}];

		return data;
	},
	dataRadar: function () {
		var data = {
			labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
			datasets: [{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [random(), random(), random(), random(), random(), random(), random()]
			}, {
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [random(), random(), random(), random(), random(), random(), random()]
			}]
		};
		return data;
	}


});
function random() {
	return Math.floor((Math.random() * 100) + 1);
}
```


many thanks to [chart.js][b41125e8]

  [b41125e8]: http://www.chartjs.org/ "chart.js"
