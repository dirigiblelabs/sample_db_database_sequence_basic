/* globals $ */
/* eslint-env node, dirigible */

var database = require('db/database');
var response = require('net/http/response');

var datasource = database.getDatasource();

var seq1 = datasource.getSequence("seq1");
if (!seq1.exists()) {
	seq1.create(100); // start from
}

response.println(seq1.next());

response.flush();
response.close();