var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

//Skill Drill
var numbers = [0,2,4,6,8];

var addFive=numbers.map(function(integer){return integer+5;});
console.log(addFive)

//City extraction example using map() method 
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

//Skill drill extract population from above example

var cityPopulation=cities.map(function(cityPop){
    return cityPop.population;
});
console.log(cityPopulation);

//Skill drill use filter() method to find animals that start with the letter 'S'

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterS = words.filter(function(animals){
    return animals {^s}; //struggling to return the correct array...
});

console.log(letterS);


//Example using => syntactic sugar
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);

//example using sort() method
var familyAge = [3,2,39,37,9];

var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

//another example
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

//Example using the slice() method
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

//Skill drill using slice() method to select the first three elements of the arrray

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceSkill = words.slice(0,3);
var sliceEnd=words.slice(3, );