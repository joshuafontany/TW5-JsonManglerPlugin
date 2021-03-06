/*\
title:  $:/plugins/joshuafontany/jsonmangler/modules/filters/encodeindex.js
type: application/javascript
module-type: filteroperator

Filter operator for encoding json tiddler indexes

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var pointer = require("$:/plugins/joshuafontany/jsonmangler/modules/libs/json-pointer.js");

/*
Export our filter function
*/
exports.encodeindex = function(source,operator,options) {
    var results = [];
    source(function(tiddler, title) {
        results.push(pointer.escape(title));
    });
    return results;
};

})();