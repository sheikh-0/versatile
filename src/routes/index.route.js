/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright IBM Corporation 2020
*/

const express = require('express');
const swagger = require('./swagger.route');

const router = express.Router();

function isEmpty(value){
  return (value == null || value.length === 0);
}

router.get('/', function(req, res) {
   var name = req.query.name
   if(isEmpty(name)) {
    console.log('Empty Name supplied');
    var name = "World";
}
   res.send('Hello ' + name);
 });


router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;