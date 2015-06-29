/* 
	the function barchart mange the animation with other subfunction, here are the most importants:
		that.setData -> changes the data to another dataset
		that.render ->  defines the x- and y axis 
			that.updateBars -> updates the bars with the new dataset
			that.updateTexty -> updates the text in y axis with the new data
			that.updateHeader
			that.updateAxis
*/
function barchart() {


	var that = {};
	var data = null;

	var margin = {
			top: 90
			, right: 20
			, bottom: 30
			, left: 40
		}
		, width = 650 - margin.left - margin.right
		, height = 450 - margin.top - margin.bottom;


	var svg = d3.selectAll(".left")
		.append("svg")
		.attr("class", "chart")
		.attr("width", width + margin.left +
			margin.right)
		.attr("height", height + margin.top +
			margin.bottom)
		.append("g")
		.attr("transform", "translate(" +
			margin.left + "," + margin.top + ")"
		);


	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," +
			height + ")")


	that.setData = function (d) {
		data = d;
	}

	that.getData = function () {
		return data;
	}


	that.render = function (z, category) {
		if (!data) return;

		d3.selectAll("h3")
			.text(category[z] + " : " + z)

		x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

		x.domain(data.map(function (d) {
			return d.label;
		}));

		y = d3.scale.linear()
			.range([height, 0]);

		y.domain([0, d3.max(this.getData()
			, function (d) {
				return d.Math;
			})]);

		xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");

		yAxis = d3.svg.axis()
			.scale(x)
			.orient("middle");


		svg.append("g")
			.attr("class", "y axis")
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 4)
			.attr("dy", ".21em")
			.style("text-anchor", "end")
			.text(
				"success rate in pisa test - the more the better"
			);

		this.updateBars();
		this.updateTexty();
		this.updateAxis();
		this.updateHeader();
	};

	that.updateBars = function () {
		// add axis
                // Constructs a new ordinal scale with a range of twenty categorical colors for the bars
		var color1 = d3.scale.category20();

		var bars = svg.selectAll(".bar")
			.data(this.getData());
		bars.enter()
			//        .append("g")
			//        .attr("class", "container")
			.append("rect")
			//  .attr('fill', function(d,i) { return color1(i % data.length);})
			.attr("class", "bar");

		bars.exit()
			.transition()
			.duration(500)
			.attr("height", 0)
			.remove();

		bars
			.transition()
			.duration(500)
			.attr('fill', function (d, i) {
				return color1(i % data.length);
			})
			.attr("x", function (d) {
				return x(d.label);
			})
			.attr("y", function (d) {
				return y(d.Math);
			})
			.attr("height", function (d) {
				return height - y(d.Math);
			})
			.attr("width", x.rangeBand());

	};

	that.updateTexty = function () {

		var texty = svg.selectAll(".ytext")
			.data(this.getData())

		texty.enter()
			.append("text")
			.attr("class", "ytext");


		texty.exit()
			.transition()
			.duration(500)
			.attr("height", 0)
			.remove()

		texty
			.transition()
			.duration(500)
			.attr("x", function (d) {
				return x(d.label) + x.rangeBand() /
					2
			})
			.attr("y", function (d) {
				return y(d.Math) + 3;
			})
			.attr("dy", ".75em")
			.text(function (d) {
				return d.Math;
			});
	};

	that.updateHeader = function () {

		var header = svg.selectAll(
				".theader")
			.data(this.getData())

		header.enter()
			.append("text")
			.attr("class", "theader");

		header.exit()
			.transition()
			.duration(500)
			.attr("height", 0)
			.remove()

		header
			.transition()
			.duration(500)
			.attr("x", function (d) {
				return 650 / 2 - 10;
			})
			.attr("y", function (d) {
				return -40;
			})
			.text(function (d) {
				return d.Header;
			});



		var header2 = svg.selectAll(
				".theader2")
			.data(this.getData())
		header2.enter()
			.append("text")
			.attr("class", "theader2");
		header2.exit()
			.transition()
			.duration(500)
			.attr("height", 0)
			.remove()
		header2
			.transition()
			.duration(500)
			.attr("x", function (d) {
				return 650 / 2 - 10;
			})
			.attr("y", function (d) {
				return -55;
			})
			.text(function (d) {
				return d.Header2;
			});
	};

	that.updateAxis = function () {
		svg.selectAll("g.x.axis")
			.call(xAxis);
	};

	return that;
};
