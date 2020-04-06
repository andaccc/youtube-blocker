 /**
  * Extention Option page 
  * TODO:
  * App On/off 
  * Tab limit slider
  * Recommend video blocker
  * Video blocker (only audio )
  */


// store the option
function constructOptions() {
  var checkbox = document.querySelector("input[id=mainBtnChk]");

  checkbox.addEventListener( 'change', function() {
    var isOn = this.checked;
    chrome.storage.sync.set({app: isOn}, function() {
      console.log('app is on: ' + isOn);
    });
  });
}

constructOptions();