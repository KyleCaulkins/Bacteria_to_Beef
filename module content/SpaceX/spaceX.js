//API call to space x
const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));

//If we only wanted the Vandenberg Air Force base info, zero element
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//Skill Drill using map() to print only the latitude and longitude coordinates for each SpaceX launch station
//the pair statement comes from a stack overflow post. Clever way to combine to arrays.
d3.json(url).then(function(data) {
    console.log(data);
    var latitudes = data.map(element=>element.location.latitude)
    var longitudes = data.map(element=>element.location.longitude)
    let pair=latitudes.map((a,b)=>[a, longitudes[b]]);
    console.log(pair)
});

