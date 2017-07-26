const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://bagio:bagio@localhost:5432/bagiodb';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE nodes(id SERIAL PRIMARY KEY, NodeId INT not null unique,Name VARCHAR(40) not null);CREATE TABLE edges(eId SERIAL PRIMARY KEY, source int not null,dest int not null,weight int default 0);');
query.on('end',() => {client.end();});
