/*
	In this js file the data will be saved from csv files into array on one hand and on the other hand the overview chart 
	will be created (show all data in one chart).
	At the end call the main function barchart, for the animation and for manuell navigation
*/
c = barchart();
// in the array tmp we save the different dataset
var tmp = [];
// in the array category we save the header text
var category = [];
var rightdata = [];
var newData = null;
var oldData = null;
var Data3 = null;

//start importing data from different csv files 
d3.csv("AtSchoolInternetConnection.csv"
	, function (data) {
		data.forEach(function (d) {
			d.label = d.label;
			d.Math = +d.Math;
			d.Header = d.Header;
			tmp[0] = data;
			category[0] = "Aid factor";
		});
	});


d3.csv("seekExplanations.csv", function (
	data) {
	data.forEach(function (d) {
		d.label = d.label;
		d.Math = +d.Math;
		d.Header = d.Header;
		tmp[1] = data;
		category[1] = "Interest factor";
	});
});

d3.csv("TeacherExtraHelp.csv", function (
	data) {
	data.forEach(function (d) {
		d.label = d.label;
		d.Math = +d.Math;
		d.Header = d.Header;
		tmp[2] = data;
		category[2] = "Teacher factor";
	});
});

d3.csv("StudentsListen.csv", function (
	data) {
	data.forEach(function (d) {
		d.label = d.label;
		d.Math = +d.Math;
		d.Header = d.Header;
		tmp[3] = data;
		category[3] = "Teacher factor";
	});
});

d3.csv("SenseofBelonging.csv", function (
	data) {
	data.forEach(function (d) {
		d.label = d.label;
		d.Math = +d.Math;
		d.Header = d.Header;
		tmp[4] = data;
		category[4] =
			"Sozial/Attitude factor";
	});
});

d3.csv("WasteofTime.csv", function (
	data) {
	data.forEach(function (d) {
		d.label = d.label;
		d.Math = +d.Math;
		d.Header = d.Header;
		tmp[5] = data;
		category[5] =
			"Sozial/Attitude factor";
	});
});
// Datatset with all information
var data = {
	labels: [
    'internet connection - Aid'
		, 'seek explanations - Interest'
		, 'teacher help - Teacher '
    , 'listen to teacher - Teacher'
		, 'feel like an outsider - Sozial'
		, 'waste of time - Attitude'
  ]
	, series: [
		{
			label: 'Strongly agree'
			, values: [495, 485, 471, 466, 486
				, 481]
    }
		, {
			label: 'Agree'
			, values: [498, 479, 477, 475, 474
				, 478]
    }
		, {
			label: 'Disagree'
			, values: [460, 458, 469, 483, 442
				, 435]
    }
		, {
			label: 'Strongly disagree'
			, values: [, 420, 464, 464, 399
				, 415]
    }, ]
};
var chartWidth = 250
	, barHeight = 20
	, groupHeight = barHeight * data.series
	.length / 2
	, gapBetweenGroups = 10
	, spaceForLabels = 190
	, spaceForLegend = 190;

// Zip the series data together (first values, second values, etc.)
var zippedData = [];
for (var i = 0; i < data.labels.length; i++) {
	for (var j = 0; j < data.series.length; j++) {
		zippedData.push(data.series[j].values[
			i]);
	}
}

// Color scale
var color = d3.scale.category20();
var chartHeight = barHeight *
	zippedData.length + gapBetweenGroups *
	data.labels.length;
var x = d3.scale.linear()
	.domain([0, d3.max(zippedData)])
	.range([0, chartWidth]);
var y = d3.scale.linear()
	.range([chartHeight + gapBetweenGroups
		, 0]);
var yAxis = d3.svg.axis()
	.scale(y)
	.tickFormat('')
	.tickSize(0)
	.orient("left");

var chart2 = d3.selectAll(".chart2")
	.attr("width", spaceForLabels +
		chartWidth + spaceForLegend)
	.attr("height", chartHeight);

var bar = chart2.selectAll("g")
	.data(zippedData)
	.enter()
	.append("g")
	.attr("transform", function (d, i) {
		return "translate(" + spaceForLabels +
			"," + (i * barHeight +
				gapBetweenGroups * (0.5 + Math.floor(
					i / data.series.length))) + ")";
	});
// Create rectangles of the correct width
bar.append("rect")
	.attr("fill", function (d, i) {
		return color(i % data.series.length);
	})
	.attr("class", "bar")
	.attr("width", x)
	.attr("height", barHeight - 1);
// Add text label in bar
bar.append("text")
	.attr("x", function (d) {
		return x(d) + 3;
	}) // - 3; })
	.attr("y", barHeight / 2)
	.attr("fill", "red")
	.attr("dy", ".35em")
	.text(function (d) {
		return d;
	});

// Draw labels
bar.append("text")
	.attr("class", "label")
	.attr("x", function (d) {
		return -1;
	})
	.attr("y", groupHeight / 2)
	.attr("dy", ".35em")
	.text(function (d, i) {
		if (i % data.series.length === 0)
			return data.labels[Math.floor(i /
				data.series.length)];
		else
			return ""
	});

chart2.append("g")
	.attr("class", "y axis")
	.attr("transform", "translate(" +
		spaceForLabels + ", " + -
		gapBetweenGroups / 2 + ")")
	.call(yAxis);
// Draw legend
var legendRectSize = 18
	, legendSpacing = 4;
var legend = chart2.selectAll('.legend')
	.data(data.series)
	.enter()
	.append('g')
	.attr('transform', function (d, i) {
		var height = legendRectSize +
			legendSpacing;
		var offset = -gapBetweenGroups / 2;
		var horz = spaceForLabels +
			chartWidth + 40 - legendRectSize;
		var vert = i * height - offset;
		return 'translate(' + horz + ',' +
			vert + ')';
	});
legend.append('rect')
	.attr('width', legendRectSize)
	.attr('height', legendRectSize)
	.style('fill', function (d, i) {
		return color(i);
	})
	.style('stroke', function (d, i) {
		return color(i);
	});
legend.append('text')
	.attr('class', 'legend')
	.attr('x', legendRectSize +
		legendSpacing)
	.attr('y', legendRectSize -
		legendSpacing)
	.text(function (d) {
		return d.label;
	});

var data_idx = 0;

//let the film start - start animation
var data_interval = setInterval(
	function () {

		if (data_idx == 0) {

			d3.selectAll("#startText")
				.attr("style"
					, "visibility: hidden");
		}
                //  invoke the barchart function 
		c.setData(tmp[data_idx]);
		c.render(data_idx, category);

		data_idx++;

		if (data_idx >= tmp.length) {
			d3.selectAll("button")
				.attr("style", "display:nline")
				.text("Switch Data")

			d3.selectAll(".right")
				.attr("style", "display:nline")
			data_idx = 0;
			clearInterval(data_interval);
		}
	}, 4500);



var switched = false;
var z = 0;
// manuell changing the datat with button
d3.select('#switch')
	.on('click', function () {
		c.setData(tmp[z]);
		c.render(z, category);
		z = z + 1;
		if (z == tmp.length) {
			z = 0;
		}
	});
