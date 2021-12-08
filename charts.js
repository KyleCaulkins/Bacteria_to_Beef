//Don't forget, when running this in a browser you need to navigate to the folder in the command prompt and type "python -m http.server" to make a local server host
//Put "localhost:8000" into browser to use the local server
//There are securities in place to prevent the call to the .json file, actions above must be taken until published to github

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
   
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

//CREATING HORIZONTAL BAR CHART
// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples=data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray=samples.filter(sampleObj => sampleObj.id ==sample);
    //Added this so I can see the array
    //console.log(samplesArray);
    //  5. Create a variable that holds the first sample in the array.
    var result =samplesArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids= result.otu_ids;
    //Had to slice and reverse these variables to get the horizontal bar chart to dipslay properly
    var otu_labels= result.otu_labels.slice(0,10).reverse();
    //console.log(otu_labels);
    var sample_values= result.sample_values.slice(0,10).reverse();
    //console.log(sample_values);


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
    //console.log(yticks);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values,
      y: yticks,
      type: "bar",
      orientation: "h",
      text: otu_labels

    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
     title: "Top 10 Bacteria Cultures Found"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

//CREATING BUBBLE CHART
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      },
      text: otu_labels
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title: "OTU ID"},
      hovermode: "closest"
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

//CREATING GAUGE CHART
//The notes in the "BelleyButton_gauge_starter_code" seemed to be mixed with the bar chart starter code. I cleaned it up, hopefully this is what they were after...
// DELIVERABLE 3 Requirements
// 1. Create a variable that filters the metadata array for the object with the desired sample number.
    //console.log(data.metadata);
    var metaData= data.metadata.filter(metaObj=> metaObj.id ==sample)
// 2. Create a variable that holds the first sample in the metadata array.
    var gaugeResults = metaData[0];
    console.log(gaugeResults);
// 3. Create a variable that holds the washing frequency.
    var wash = parseFloat(gaugeResults.wfreq);
// 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: wash,
      type: "indicator",
      mode: "gauge+number",
      title: {text: "Belly Button Washing Frequency <br> Scrubs Per Week"},
      gauge: {
        axis: {range : [null,10],tickwidth:1},
        bar: {color: "black"},
        steps: [
          {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "lightgreen"},
          {range: [8, 10], color: "green"}
        ],
        dtick: 2
      }
    }];

// 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      automargin: true
    };

// 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
