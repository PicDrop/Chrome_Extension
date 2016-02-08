
// Drop Down Menu options on control click when in browser
chrome.contextMenus.create({
    "title": "PicDrop.io",
    "contexts": ["all"],
    "onclick": function (data) {
      
      //chrome.extension.getBackgroundPage().console.log(data);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {url: data}, function(response) {
      });
    });
    }
  });

//Fired when User Clicks Extension Icon
chrome.browserAction.onClicked.addListener(function (tab) { 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {icon: "clicked"}, function(response) {
      });
    });
});

// Setting / Getting localStorage on background 
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "save") {
        console.log("saving local Storage")
        localStorage.setItem("picdrop", JSON.stringify(request.data));
    }

    if(request.cmd == "load") {
        console.log("loading local Storage")
        console.log("loading local Storage data - ", JSON.parse(localStorage.getItem("picdrop")))
        sendResponse(JSON.parse(localStorage.getItem("picdrop")));
    }
});