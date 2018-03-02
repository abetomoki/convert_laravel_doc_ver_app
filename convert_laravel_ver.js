 window.onload = function() {
    chrome.storage.sync.get(["targetVer"], function(target) {
      var baseUrl = "https://readouble.com/laravel/";
      var ver = target.targetVer;
      if (typeof ver === "undefined" || ver === "all") {
        return;
      } else {
        var url = location.pathname;
        var destination = url.slice(12);

        if (url.indexOf(ver) !== -1) {
          return;
        }
        window.location.href = baseUrl + ver + destination;
      }
    });
 };
