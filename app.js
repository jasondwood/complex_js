/*
purpose of application- 
allow a user to create, read, edit and delete products from a collection of products
We will prompt a user for the desired operation, and then perform it


*/

import { createRequire } from 'module'
const require = createRequire(import.meta.url);

var prompt = require('prompt');


import { getProductById} from "./data/read.js"

import {removeProductId} from "./data/read.js"

import {products} from "./products.js"


prompt.start();

/*
prompt.get(['id'], function (err, result) {
    var product = getProductById(result.id); 
    console.log(product);
  }); */

// removeProductId(5);

// prompt for which ID to remove
prompt.get(['id'], function (err, result) {
    var removeID = removeProductId(result.id);
    
})
