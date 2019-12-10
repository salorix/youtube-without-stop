(function() {
  "use strict";
    setInterval(function () {
    var elem = document.querySelector(
      ".style-scope.ytd-popup-container>yt-confirm-dialog-renderer .buttons.style-scope.yt-confirm-dialog-renderer>yt-button-renderer#confirm-button"
    );
    if (elem) {
      elem.click();
    }
  }, 500);
})();
