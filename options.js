document.addEventListener('DOMContentLoaded', function() {
    var mySettingInput = document.getElementById('mySetting');
  
    // Ask the service worker to load any saved settings and update the UI.
    chrome.runtime.sendMessage({method: 'getSetting', key: 'mySetting'}, function(response) {
        if (response) {
            mySettingInput.value = response;
        } else {
            mySettingInput.value = '{' +
            "\n" + '  "Urgent": "red",' + 
            "\n" + '  "VIP": "#331122"' +
            "\n}";
        }
    });
  
    // Listen for changes in the input field and save them via the service worker.
    mySettingInput.addEventListener('change', function() {
      chrome.runtime.sendMessage({method: 'setSetting', key: 'mySetting', value: mySettingInput.value});
    });
  });
  