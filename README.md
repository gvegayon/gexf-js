# JavaScript GEXF Viewer for Gephi

This is a modified version of https://github.com/raphv/gexf-js. 

## License

See [LICENSE](LICENSE).

## Known Issues

**The issue below is the source of 90% of support emails I receive, please read carefully**

Gexf-JS won't work on chrome if launched from your local drive (with a file:/// URI scheme).
This is a known security limitation, and there are 2 known workarounds:

1. Use Firefox.
2. Use a server (upload it or use a local server). If you have Python on your computer, the simplest is to launch a SimpleHTTPServer with the Command Line:

    $ cd /path/to/gexf-js
    $ python -m SimpleHTTPServer

There used to a third workaround (The --allow-file-access-from-files flag), but it is no longer available on newest Chrome versions since 2014.

## Newest features

Hybrid directed/undirected graphs are now supported, and arrows can be shown.

Gexf-JS now speaks 9 languages: Dutch, English, French, Finnish, German, Greek, Italian, Spanish, and Turkish!

## Contributors

- Raphaël Velt (main developer, French and English versions)
    - http://raphaelve.lt/
    - Twitter: [\@raphv](http://twitter.com/raphv)

- Vicenzo Cosenza (Italian translation)
    - http://www.vincos.it/
    - Twitter: [\@vincos](http://twitter.com/vincos)

- Eduardo Ramos Ibáñez (Spanish translation)
    - https://github.com/eduramiba
    - Twitter: [\@eduramiba](http://twitter.com/eduramiba)

- Jaakko Salonen (Finnish translation and hyperlink replacement)
    - https://github.com/jsalonen
    - Twitter: [\@jsalonen](http://twitter.com/jsalonen)

- Zeynep Akata (Turkish translation)

- Σωτήρης Φραγκίσκος (Greek translation)

- Martin Eckert (German translation)

- Tobias Bora (Arrows and hybrid graphs)
    - https://github.com/tobiasBora

- Jan de Mooij (Dutch translation and touch-screen compatibility)
    - https://github.com/Ilsontfous

- Bruna Delzari (Portuguese translation)

- Adil Aliyev (Azerbaijani translation)
    - https://github.com/adilek
    - Twitter: [\@adilaliyev](http://twitter.com/adilaliyev)


## How to use ?

1. Export your graph from Gephi as a GEXF file
2. Put it in the gexf-js directory
3. Modify config.js to point to your GEXF File and tune the interface.

You can view more Gexf files by pointing your browser to index.html#Filename.gexf

## Compatibility

Gexf-JS uses the canvas element, which might cause compatibility issues with older browsers.

It has been tested with the latest Chrome, Firefox and Internet Explorer versions.

It doesn't work with Internet Explorer 8 or older.

### Contribute as a translator

Gexf JS Viewer is now available in English, French and Italian

If you want to translate the interface in your language (and share this translation with the community), please translate the following sentences, send them to me and I'll upload them to github.

Strings to translate:

1. Search nodes
2. Attributes
3. Nodes
4. Inbound Links from
5. Outbound Links to
6. Undirected links with
7. Activate lens mode
8. Deactivate lens mode
9. Show edges
1. Hide edges
1. Zoom In
1. Zoom Out
1. Your browser cannot properly display this page. We recommend you use the latest Firefox or Chrome version

* * * * *

# API Reference

## Classes

<dl>
<dt><a href="#GEXFjs">GEXFjs</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#parseGEXF">parseGEXF(data, obj, isJson)</a></dt>
<dd><p>Parses an XML/JSON object</p>
</dd>
<dt><a href="#renderGEXF">renderGEXF(GexfJS)</a></dt>
<dd><p>Renders a GEXF object</p>
</dd>
</dl>

<a name="GEXFjs"></a>

## GEXFjs
**Kind**: global class  
**Classdescription**: Here goes some nice description on the class  

* [GEXFjs](#GEXFjs)
    * [new GEXFjs(obj)](#new_GEXFjs_new)
    * [.DICTIONARY](#GEXFjs+DICTIONARY)
    * [.GEXFjsDefaults](#GEXFjs+GEXFjsDefaults)
    * [.GEXFjsDefaultParams](#GEXFjs+GEXFjsDefaultParams)

<a name="new_GEXFjs_new"></a>

### new GEXFjs(obj)
The workflow to use this js library follows: 

1. Create a `GEXFjs` object using the [GEXFjs](#GEXFjs) constructor.
2. Set either the path to the GEXF file, or a String with a XML using the
[setParams](setParams) method.
3. Render the graph using [renderGEXF](#renderGEXF).

You'll need to have the `index.html` and the respective libraries to use this.
See the examples folder for more.


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | List of parameters. |

<a name="GEXFjs+DICTIONARY"></a>

### gexFjs.DICTIONARY
The dictionarys. This is used for the UI. Currently, the following languages
are supported:

-  Dutch, English, French, Finnish, German, Greek, Italian, Spanish, and Turkish!

**Kind**: instance property of [<code>GEXFjs</code>](#GEXFjs)  
<a name="GEXFjs+GEXFjsDefaults"></a>

### gexFjs.GEXFjsDefaults
List of default values for the constructor

-  `lensRadius`
-  `lensGamma`
-  `graphZone`

**Kind**: instance property of [<code>GEXFjs</code>](#GEXFjs)  
<a name="GEXFjs+GEXFjsDefaultParams"></a>

### gexFjs.GEXFjsDefaultParams
Default parameters to be modified by the user

**Kind**: instance property of [<code>GEXFjs</code>](#GEXFjs)  

| Param | Type | Description |
| --- | --- | --- |
| graphFile | <code>string</code> | Relative path to a GEXF/JSON file. |
| graphString | <code>string</code> | String containing a GEXF file to be parsed. |
| showEdges |  | default `true`, |
| useLens |  | default `false`, |
| zoomLevel |  | default `0`, |
| curvedEdges |  | default `true`, |
| edgeWidthFactor |  | default `1`, |
| minEdgeWidth |  | default `1`, |
| maxEdgeWidth |  | default `50`, |
| textDisplayThreshold |  | : `default`, |
| nodeSizeFactor |  | default `1`, |
| replaceUrls |  | default `true`, |
| showEdgeWeight |  | default `true`, |
| showEdgeLabel |  | default `true`, |
| sortNodeAttributes |  | : `defaultrue`, |
| showId |  | default `true`, |
| showEdgeArrow |  | default `true`, |
| language |  | : default `false`, |

**Example**  
```js
// Creating a GEXF object
var x = new GEXFjs();
x.setParams({
    graphFile: "lesmiserables.gexf",
    curvedEdges: false,
    language: "es"
});

// Rendering
renderGXF(x);
```
<a name="parseGEXF"></a>

## parseGEXF(data, obj, isJson)
Parses an XML/JSON object

**Kind**: global function  

| Param | Description |
| --- | --- |
| data | An XML/JSON object. |
| obj | A GEXFjs object. |
| isJson | Logical. |

<a name="renderGEXF"></a>

## renderGEXF(GexfJS)
Renders a GEXF object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| GexfJS | <code>object</code> | As created by [GEXFjs](#GEXFjs) |

**Example**  
```js
// First, we create the GEXF object
var x = new GEXFjs();

// Then, we define what we want it to process
x.setParams({graphFile: "miserables.gexf"});

// Finally, we render the document
renderGEXF(x);
```

* [renderGEXF(GexfJS)](#renderGEXF)
    * [~initializeMap()](#renderGEXF..initializeMap)
    * [~loadGraph()](#renderGEXF..loadGraph)
    * [~getNodeFromPos(_coords)](#renderGEXF..getNodeFromPos)
    * [~calcCoord(x, y, coord)](#renderGEXF..calcCoord)
    * [~findAngle(sx, sy, ex, ey)](#renderGEXF..findAngle)

<a name="renderGEXF..initializeMap"></a>

### renderGEXF~initializeMap()
**Kind**: inner method of [<code>renderGEXF</code>](#renderGEXF)  
<a name="renderGEXF..loadGraph"></a>

### renderGEXF~loadGraph()
Function to load the network

Currently only JSON, GEXF files and XML (GEXF) objects are supported

**Kind**: inner method of [<code>renderGEXF</code>](#renderGEXF)  
<a name="renderGEXF..getNodeFromPos"></a>

### renderGEXF~getNodeFromPos(_coords)
**Kind**: inner method of [<code>renderGEXF</code>](#renderGEXF)  

| Param |
| --- |
| _coords | 

<a name="renderGEXF..calcCoord"></a>

### renderGEXF~calcCoord(x, y, coord)
**Kind**: inner method of [<code>renderGEXF</code>](#renderGEXF)  

| Param |
| --- |
| x | 
| y | 
| coord | 

<a name="renderGEXF..findAngle"></a>

### renderGEXF~findAngle(sx, sy, ex, ey)
**Kind**: inner method of [<code>renderGEXF</code>](#renderGEXF)  

| Param |
| --- |
| sx | 
| sy | 
| ex | 
| ey | 


* * *

Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).