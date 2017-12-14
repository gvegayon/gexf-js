/*** USE THIS FILE TO SET OPTIONS ***/

var x = new GEXFjs();

x.setParams({
    //graphFile : "miserables.gexf",
    graphXMLString: '<?xml version="1.0" encoding="UTF-8"?> \
<gexf xmlns="http://www.gexf.net/1.1draft" version="1.1" xmlns:viz="http://www.gexf.net/1.1draft/viz" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.gexf.net/1.1draft http://www.gexf.net/1.1draft/gexf.xsd"> \
  <meta lastmodifieddate="2011-09-05"> \
    <creator>Gephi 0.8</creator>\
    <description></description>\
  </meta>\
  <graph defaultedgetype="undirected" timeformat="double" mode="dynamic">\
    <attributes class="node" mode="static">\
      <attribute id="modularity_class" title="Modularity Class" type="integer">\
        <default>0</default>\
      </attribute>\
    </attributes>\
    <nodes>\
    <node id="0" label="Myriel"> \
        <attvalues> \
          <attvalue for="modularity_class" value="1"></attvalue> \
        </attvalues> \
        <viz:size value="21.37143"></viz:size> \
        <viz:position x="-382.45764" y="147.4245"></viz:position> \
        <viz:color r="168" g="168" b="29"></viz:color> \
      </node> \
      <node id="2" label="George"> \
        <attvalues> \
          <attvalue for="modularity_class" value="1"></attvalue> \
        </attvalues> \
        <viz:size value="10"></viz:size> \
        <viz:position x="50.0" y="147.4245"></viz:position> \
        <viz:color r="168" g="168" b="29"></viz:color> \
      </node> \
      <node id="3" label="Valita"> \
        <attvalues> \
          <attvalue for="modularity_class" value="1"></attvalue> \
        </attvalues> \
        <viz:size value="50"></viz:size> \
        <viz:position x="10.0" y="20.4245"></viz:position> \
        <viz:color r="168" g="168" b="229"></viz:color> \
      </node> \
      <node id="1" label="Napoleon"> \
        <attvalues> \
          <attvalue for="modularity_class" value="1"></attvalue>\
        </attvalues>\
        <viz:size value="8.0"></viz:size>\
        <viz:position x="-486.80704" y="177.66797"></viz:position>\
        <viz:color r="168" g="168" b="29"></viz:color>\
      </node>\
      </nodes>\
      <edges>\
        <edge source="0" target="1"/>\
          </edges>\
  </graph>\
</gexf>'
});

// Render the graph
renderGEXF(x);