function constructOptions() {
  var checkbox = document.querySelector("input[id=mainBtnChk]");

  chrome.storage.sync.get(['app'], function(result) {
    checkbox.checked = result.app;
  });

  checkbox.addEventListener( 'change', function() {
    var isOn = this.checked;
    chrome.storage.sync.set({app: isOn}, function() {
      console.log('app is on: ' + isOn);
    });
  });
}

constructOptions();