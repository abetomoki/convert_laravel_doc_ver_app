window.onload = function() {
    var targetLaravelVersion = "/laravel/5.2/";
    var url = location.pathname;
    var destination = url.slice(13);
    if (url.indexOf(targetLaravelVersion) !== 0) {
         window.location.href = targetLaravelVersion + destination;
    }
};

