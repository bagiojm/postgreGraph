var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var morgan=require('morgan');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://bagio:bagio@localhost:5432/bagiodb';

const client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.urlencoded({ extended :true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.post('/',function(req,res){
  console.log(req.body.name);



    pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Insert Data
    for(var i=0;i<req.body.nodes.length;i++){
    client.query('INSERT INTO nodes(NodeId, Name) values($1, $2)',
    [req.body.nodes[i].nodeName, req.body.nodes[i].properties]);
    console.log("nodeName:"+req.body.nodes[i].nodeName+" has "+req.body.nodes[i].properties);
      }
      for(var i=0;i<req.body.edges.length;i++){
        client.query('INSERT INTO edges(source,dest,weight) values($1, $2, $3)',
        [req.body.edges[i].s, req.body.edges[i].d,req.body.edges[i].weight]);
      console.log(req.body.edges[i].s+" is connected to "+req.body.edges[i].d+ " and has weight " +req.body.edges[i].weight);
        }
});

  res.send("Hai buddies");
});




app.listen(4000,function(){
console.log("listening @ 4000");
}
)
