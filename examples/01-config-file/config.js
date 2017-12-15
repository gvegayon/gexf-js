/*** USE THIS FILE TO SET OPTIONS ***/

// Create the object
var x = new GEXFjs();

// Pass the path
x.setParams({graphFile : "../data/miserables.gexf"});

// Render the graph
renderGEXF(x);