/**
 * get-favicon
 * Copyright (c) 2014 Johnie Hjelm
 */


/*-------------------------------------------------------------------
  Required modules
-------------------------------------------------------------------*/

var got = require('got');


/*-------------------------------------------------------------------
  Get symbol
-------------------------------------------------------------------*/
(function () {
  'use strict';

  var getFavicon = function( url, cb ) {

    got('http://www.google.com/s2/favicons?domain=' + url, function (err, res) {

      if (err) {
        cb(err);
        return;
      }

      cb(null, res);
      
    });

  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = getFavicon;
  } else {
    window.getFavicon = getFavicon;
  }

})();
