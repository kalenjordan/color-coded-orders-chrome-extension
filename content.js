chrome.runtime.sendMessage({method: "getSetting", key: "mySetting"}, function(response) {
    let colorMapping = JSON.parse(response);    
    console.log('Color-Coded Shopify Orders Color Mapping: ');
    console.log(colorMapping); // This will log the value of "mySetting"

    // applyColorToOrderRows(colorMapping);

      
    let intervalId = setInterval(function(colorMapping) {
        let rows = document.querySelectorAll('[class*="Polaris-IndexTable__TableRow"]');
        if (rows.length) {
            console.log("Order Rows HTML Are Loaded:");
            console.log(rows);
            applyColorToOrderRows(colorMapping, rows);
            clearInterval(intervalId);  // Stop checking.
        }
    
    }, 1000);

});

function checkForSelector() 
{
    let element = document.querySelector(cssSelector);
    if (element) {
      console.log('Element found!');
      clearInterval(intervalId);  // Stop checking.
      // Here you can perform additional actions with the element.
    } else {
      console.log('Element not found.');
    }
}

function applyColorToOrderRows(colorMapping, rows) 
{
    // loop over rows
    // row.querySelectorAll('[class*="Polaris-Tag__TagText"]');
}