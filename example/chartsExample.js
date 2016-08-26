/**
 * Created by ThinkMac on 8/26/16.
 */

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