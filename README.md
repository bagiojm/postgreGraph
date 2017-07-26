# postgreGraph
Node API for saving a graph on postgreSQL database

JSON structure for graph API
************************************
{ "name":"graphName",
"nodes":[
{"nodeName":"1","properties":"prop1"},
{"nodeName":"2","properties":"prop2"},
{"nodeName":"3","properties":"prop3"},
{"nodeName":"4","properties":"prop4"}],
"edges":[
{"s":"1","d":"3","weight":"1"},
{"s":"3","d":"4","weight":"3"},
{"s":"2","d":"3","weight":"2"}]
}
*************************************
npm packages:
pg,
express,
bodyparser
*************************************
WORKING
-------
API listens at port 4000.On the JSON input(exactly the same structure) the api saves the nodes of graph in table(NODES) and edges in table(EDGES).basically its an adjacensy list being saved in a postgre database.
