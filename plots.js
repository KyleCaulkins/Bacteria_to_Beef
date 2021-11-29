Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Creating arrays of city names and growth figures
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

//Creating a bar chart with the arrays from above
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

//Skill Drill cerat a bar chart of the seven largest cities
//Create array
var sevenLargestCityNames=cityGrowths.map(name =>name.City);
var sevenLargestCityPopulations=city.Growths.map(cities=>parseInt(cities.population));

//Create bar chart with largest cities array
var trace = {
    x: sevenLargestCityNames,
    y: sevenLargestCityPopulations,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Seven Largest Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);