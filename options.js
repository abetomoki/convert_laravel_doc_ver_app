$(function(){
  // セーブボタンが押されたら、
  // ストレージに保存する。
  $("#save").click(function () {
    chrome.storage.sync.set(
      {
        "targetVer": $("#targetVer").val();
      }
    );
});
