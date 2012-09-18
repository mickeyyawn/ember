var fs = require('fs');
var http = require('http');
var url = require('url');
var utils = require('../../lib/utils.js');
var config = require('../../config');
var model = require('./../models/model.js');


exports.app = function(req, res){
  res.sendfile('app/views/app.html');
}