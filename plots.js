//Don't forget, when running this in a browser you need to navigate to the folder in the command prompt and type "python -m http.server" to make a local server host
//Put "localhost:8000" into browser to use the local server
//There are securities in place to prevent the call to the .json file, actions above must be taken

//Module 12.4.3 making a drop down menu for the belly button data
//Dynamically generate dropdown menu items
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

//Function called when a change takes place in the dropdown menu
function optionChanged(newSample) {
    console.log(newSample);
  }

//When ID is selected functions will be called
function optionChanged(newSample) {
    buildMetadata(newSample);
    //buildCharts(newSample);
  }

//Building the "buildMetadata" fucntion to display demographic info
//Skill drill, I can't help but feel left out on a limb for this one. No thank you...
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");
      Object.entries(result).forEach(([key, value])=>
        {PANEL.append("h6").text(key + ': '+value)});
    });
  }    
//Take that! Got it...        
      