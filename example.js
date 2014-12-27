var getFavicon = require('./get-favicon');

getFavicon('www.viaplay.se', function (err, icon) {
  console.log(icon);
});
