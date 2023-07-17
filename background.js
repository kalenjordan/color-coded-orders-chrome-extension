chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == 'getSetting') {
      chrome.storage.local.get(request.key, function(result) {
        let value = result[request.key];
        if (! value) {
            value = '{' +
            "\n" + '  "Urgent": "red",' + 
            "\n" + '  "VIP": "#331122"' +
            "\n}";
        }
        sendResponse(value);
      });
      return true;  // Will respond asynchronously.
    } else if (request.method == 'setSetting') {
      var items = {};
      items[request.key] = request.value;
      chrome.storage.local.set(items);
    }
  });
  