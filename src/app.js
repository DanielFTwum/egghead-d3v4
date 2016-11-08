var linearScale = d3.scaleLinear().domain([ 0, 100 ]).range([ 0, 600 ]).clamp(
		true);

console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(106));

console.log(linearScale.invert(300));

var timeScale = d3.scaleTime().domain([ new Date(2016, 0, 1), new Date() ])
		.range([ 0, 100 ]);

console.log(timeScale(new Date(2016, 0, 15)));
console.log(timeScale(new Date(2016, 3, 15)));
console.log(timeScale(new Date()));

console.log(timeScale.invert(50));

var quantizeScale = d3.scaleQuantize().domain([ 0, 100 ]).range(
		[ "red", "white", "green" ]);

console.log(quantizeScale(22));
console.log(quantizeScale(50));
console.log(quantizeScale(88));
console.log(quantizeScale(99));
console.log(quantizeScale(999));

console.log(quantizeScale.invertExtent('white'));

var ordinalScale = d3.scaleOrdinal().domain([ "poor", "good", "great" ]).range(
		[ "red", "white", "green" ]);

console.log(ordinalScale("poor"));
console.log(ordinalScale("good"));
console.log(ordinalScale("great"));

d3.json('data/data.json', function(data) {
	console.log(data);
})

d3.json('data/data.json', function(data) {
	var min = d3.min(data, function(d) {
		return d.age;
	});
	var max = d3.max(data, function(d) {
		return d.age;
	});

	var extent = d3.extent(data, function(d) {
		return d.age;
	});

	console.log(min);
	console.log(max);
	console.log(extent);

	var scale = d3.scaleLinear().domain(extent).range([ 0, 600 ]);
	console.log(scale(24));
	
	var ages = d3.set(data, function(d){return d.age;});
	console.log(ages.values());
	
})
