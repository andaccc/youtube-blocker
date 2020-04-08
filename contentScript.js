var element = document.querySelector('#primary');
chrome.storage.sync.get(['app'], function(result) {
    if(result.app)
    {
        element.innerHTML = "<h1>Fucking BLOCKED</h1>";
    }
});
  