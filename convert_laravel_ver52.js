 window.onload = function() {

    chrome.storage.sync.get(["targetVer"], function(target) {
      console.log(target.targetVer); 
      var ver = target.targetVer;
      var url = location.pathname;
      var destination = url.slice(13);

      if (url.indexOf(ver) !== -1) {
          exit;
      }

      window.location.href = ver + destination;
    });
 };
