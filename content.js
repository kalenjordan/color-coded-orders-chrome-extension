chrome.runtime.sendMessage({method: "getSetting", key: "mySetting"}, function(response) {
    let colorMapping = JSON.parse(response);    
    console.log('Color-Coded Shopify Orders Color Mapping');
    // console.log(colorMapping); // This will log the value of "mySetting"

    // applyColorToOrderRows(colorMapping);
      
    let intervalId = setInterval(function() {
        let rows = document.querySelectorAll('[class*="Polaris-IndexTable__TableRow"]');
        if (rows.length) {
            console.log("Order Rows HTML Are Loaded");
            clearInterval(intervalId);  // Stop checking.
            applyColorToOrderRows(colorMapping, rows);
        }
    
    }, 1000);

});

function applyColorToOrderRows(colorMapping, rows) 
{
    //let row = rows[0];
    //applyColorToOneOrderRow(colorMapping, row);
    console.log("rows");
    console.log(rows);
    for (let row of rows) {
        applyColorToOneOrderRow(colorMapping, row);
    }
}

function applyColorToOneOrderRow(colorMapping, row)
{
    let tags = row.querySelectorAll('[class*="Polaris-Tag__TagText"]');
    for (let tag of tags) {
        console.log("tag: ");
        console.log(tag);
        console.log(tag.textContent);        
        let tagText = tag.textContent;

        // console.log(colorMapping);
        console.log("color:");
        console.log(colorMapping[tagText]);
        if (colorMapping[tagText]) {
            row.style.backgroundColor = colorMapping[tagText];
        }
    }
}