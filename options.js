window.onload = function() {
  chrome.storage.sync.get(["targetVer"], function(target) {
    var ver = target.targetVer;
    var docUrl = "https://readouble.com/laravel/";
    if (typeof ver === "undefined" || ver === "all") {
      var verText = document.createTextNode("すべて");
    } else {
      var verText = document.createTextNode(ver);
      docUrl += ver;
    }
    document.getElementById("ver").appendChild(verText);
    document.getElementById("urlVerLink").setAttribute("href", docUrl);

    var urlVer = document.createTextNode(docUrl);
    document.getElementById("urlVer").appendChild(urlVer);

    var element = document.getElementById("targetVer");
    for (var i = 0; i < element.options.length; i++) { 
      var option = element.options[i]; 
      if (option.value === ver) {
        element.selectedIndex = i;
        return;
      };
    }; 
  });
};

document.getElementById("save").onclick = function() {
  chrome.storage.sync.set(
    {
      "targetVer": document.getElementById("targetVer").value
    }
  );
  location.reload();
};
