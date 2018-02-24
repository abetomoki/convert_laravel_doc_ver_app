 window.onload = function() {
     var ver52 = "/laravel/5.2/";
     var ver5Dev = "/laravel/5.dev/";
     var url = location.pathname;
     var destination = url.slice(13);

     // バージョン5.2 or 5.dev以外の場合に5.2へ遷移
     if (url.indexOf(ver52) !== -1 || url.indexOf(ver5Dev) !== -1) {
         exit;
     }
     window.location.href = ver52 + destination;
 };
